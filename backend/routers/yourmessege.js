const express = require("express");
const router = new express.Router();
require('../db/connection');
const Messege = require("../model/messeges");




router.post("/messeges", async (req, res)=>{

     const{ name,email, messege} = req.body;
     console.log(req.body)
 
      
    try {


        const messegee = new Messege({ name,email, messege });
        await messegee.save()
        res.status(201).json({ message: "messeges posted successfuly" });
      }
    
      catch (err) {
        //console.log(err);
        res.status(422).json({ error: "please fill all fields " });
      }
       
 
 
 });


 router.get("/messegesforadmin", async (req, res)=>{

  Messege.find()
          .then(messegess => res.send(messegess))
    


});



 
 module.exports = router;