const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kamaldeepsingh:Luckysaini1@cluster0.bmbyy.mongodb.net/');

const {schema}  = mongoose;

const userSchema = new schema( {
  firstName : {
    type : String,
    minLength : 3,
    trim: true,
    required: true,
    maxLength: 30
  },
   lastName : {
    type : String,
    minLength : 3,
    trim: true,
    required: true,
    maxLength: 30
  },
   username: {
    type : String,
    minLength : 3,
    trim: true,
    required: true,
    maxLength: 30,
    lowercase : true,
    unique: true
  },
   password: {
    type : String,
    minLength : 6,
    trim: true,
    required: true,
    maxLength: 30
  },
})

const  accountSchema = new schema({
         userid : {
            type : mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
         },
         balance :{
            type: Number,
            required: true
         } 
}) 

const User = mongoose.model('User',userSchema);
const Account = mongoose.model('Account', accountSchema);

module.exports={
    User ,
    Account,
};