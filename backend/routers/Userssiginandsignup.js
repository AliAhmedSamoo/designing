const express = require("express");
const router = new express.Router();
require('../db/connection');
const User = require("../model/User");
const app = express();
app.post("/Registor", async(req,res)=>{
    
//    const {name:name,email,password,cpassword}=req.body;
    console.log(req.body);
    // console.log(res);
 
    //  console.log(name);
    // try{
  
    //     const userExist = await User.findOne({email :email});
    //     if(userExist){
    //         return res.status(422).json({error: "email already Exit"});
    //     }else if(password!=cpassword){
    //         return res.status(422).json({error: "password are not matching "});
            
    //     }else{
    //         const user = new User({name,email,password,cpassword});
    //         await user.save()
    //       res.status(201).json({message: "user registered successfuly"});
    //     }
      
    // }catch(err){
    //     console.log(err);
       
    // }
});


module.exports =router;