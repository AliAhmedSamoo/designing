const express = require("express");
const router = new express.Router();
require('../db/connection');
const ReqCar = require("../model/ReqCar");


router.post("/reqforCarregisteration", async(req,res)=>{
    
    const {username,email,Brand,model,price,number}=req.body;
    

    
//  console.log(req.body)
 
      
//     try{
   
    
//          const reqCar = new ReqCar({username,email,Brand,model,price,number});
//          await reqCar.save()
//        res.status(201).json({message: "Car Request submitted successfuly"});
//      }
   
//         catch(err){
//      console.log(err);
//  }
 });


 module.exports =router;