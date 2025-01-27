const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
     name :{
          type : String,
          required : [true, 'name is required!']
     },
     email :{
          type : String,
          required : [true, 'email is required!']
     },
     password :{
          type : String,
          required : [true, 'password is required!']
     },
     refreshtoken : String,
     resetpasswordcode : String,
     resetpasswordexpiries : Date
},{timestamps : true})

const User = mongoose.model('User', userSchema);

module.exports = User ;