const express = require('express');
const userRouter = require("./user");
const router = express.Router();
const {z} = require('zod');
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
const User = require("../db");
const { authMiddleware } = require('../middleware');

const app = express();

const mySchema = z.object({
    firstName : z.string().min(3),
    lastName : z.string().min(3),
       username: z.string().trim().toLowerCase(),
       password: z.string().min(6),
})

app.use("/user",userRouter);

router.post(('/signup'),async(req,res)=>{
      const success = mySchema.safeParse(req.body);
      if(!success){
        return res.status(411).json({
            message : "Wrong inputs"
        })
      }
     const existingUser = await User.findOne({
        username : req.body.username
     });
     if(existingUser){
        return res.status(411).json({
            message : "Already taken"
        })
     }
     const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
     })
     const userId = user._id;
     const token = jwt.sign({
        userId
     },JWT_SECRET);

     res.json({
        message: "User created successfully",
        token: token
     })
})

const signinSchema = z.object({
    username: z.string().trim().toLowerCase(),
       password: z.string().min(6),
});

app.post(("/signin"),async(req,res)=>{
    const success = signinSchema.safeParse(req.body);
      if(!success){
        return res.status(411).json({
            message : "Wrong inputs"
        })
      }
    const existingUser = await User.findOne({
        username : req.body.username,
        password : req.body.password
     });
     
     const userId = existingUser._id;

     if(existingUser){
        const token = jwt.sign({
            userId
         },JWT_SECRET);

        
        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
})

    const updateBody = z.object({
        firstName : z.string().min(3).optional(),
        lastName : z.string().min(3).optional(),
           password: z.string().min(6).optional(),
    })

    router.put(('/'),authMiddleware,async(req,res)=>{
        const success = updateBody.safeParse(req.body);
        if(!success){
          return res.status(411).json({
              message : "Wrong inputs"
          })
        }

        await User.updateOne({_id:req.userId},req.body);

        res.json({
            message: "Updated successfully"
        })

    })

    router.get(('/bulk'),authMiddleware,async(req,res)=>{
        const query = req.query.filter;

        const users = await User.find({
            $or: [
              { firstName: {
                "$regex": filter
              } },
              { lastName: {
                "$regex": filter
              }}
            ]
    })
     res.json({
        user: users.map((user) =>({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
     })

})

module.exports = router;


