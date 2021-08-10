const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");




const rent_a_car = new mongoose.Schema({
    name:{
        type : String,
        required:true,        
    },
    
    email:{
        type:String,
        required:true,
        unique:[true, "email is already present"],
         validate(value){
          if(!validator.isEmail(value)){
              throw new Error("invalide email")
          }
        }
    },
 
        password:{
            type : String,
            required:true,        
        },


        OTP:{
            type : String,
            required:true,        
        },
    
    
        

        


});


const Usertoactive = new mongoose.model('Usertoactive', rent_a_car)
module.exports = Usertoactive;