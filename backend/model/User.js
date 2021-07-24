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
        cpassword:{
            type : String,
            required:true,        
        },
    
        tokens: [
            {
                token: {
                    type : Array,
                    required:true
                }
            }
        ],
        

        


});

rent_a_car.pre('save', async function(next){

    next();
});

rent_a_car.methods.generateAuthToken = async function(){
    try{
        let token =jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;

    }catch(err){
        console.log(err)
    }
}



const User = new mongoose.model('User', rent_a_car)
module.exports = User;