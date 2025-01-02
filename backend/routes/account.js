const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const { default: mongoose } = require('mongoose');

router.get(('/balance'),authMiddleware,async(req,res)=>{
    const account = await Account.findOne({
      userid: req.userid
    })

    if (!account) {
        return res.status(411).json({ message: 'Account not found' }); 
      }
  

    res.json({
      balance : account.balance
    })
})




router.post(('/transfer'),authMiddleware,async(req,res)=>{
const session = await mongoose.startSession();
    session.startTransaction();

  const sendTo = req.body.to;
  const amount = req.body.amount;
  const account = await Account.findOne({ userid: req.userid }).session(session);
   
  if(amount> account.balance){
      await session.abortTransaction();
      res.status(400).json({
          message: "Insufficient balance"
      })
  }

  const sendingAccount = await Account.findOne({userid : sendTo}).session(session);
 if(!sendingAccount){
  await session.abortTransaction();
  res.status(400).json({
      message : "Invalid Account"
  })
 }

 await Account.updateOne({userid: req.userid},{$inc:{balance:-amount}}).session(session);
 await Account.updateOne({userid: req.sendTo},{$inc:{balance:amount}}).session(session);
await session.commitTransaction();
res.status(400).json({
  message : "transfer succesful"
});
});



module.exports = router;