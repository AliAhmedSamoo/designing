//const jwt = require('jsonwebtoken');
const express = require("express");
const router = new express.Router();
//const brycpt = require('bcryptjs');
//const authenticate = require('../middleware/authenticate');
require('../db/connection');
const User = require("../model/User");






router.post("/signin", async (req, res)=>{


   console.log(req.body)



    try{
        let token;

     
        const{ email, password} = req.body;
      
       

const userLogin = await User.findOne({email :email});

        if (userLogin){
           
            //  token = await userLogin.generateAuthToken();
            //  console.log(token);
            //  res.cookie('jwtoken', token,{
            //     expires: new Date(Date.now()+ 25892000000),
            //     httpOnly:true
            // });
            if (password != userLogin.password) {
                res.status(400).json({error: "Invalid email and password"});
            }else{
                 res.json({message:"user Signin Successfuly"});
                 }

        }else{
             res.status(400).json({error:"Invalid credientials"});
             }
      

    }catch(err){
        console.log(err);
    }

});

module.exports = router;