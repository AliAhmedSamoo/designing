const express = require("express");
const router = new express.Router();
require('../db/connection');
const Bookingrequests = require("../model/Bookingrequests");


router.post("/getbookingformdata", async (req, res)=>{

    console.log(req.body)


    const { Name, Phone, CNIC, Address, SelectedCity, Date, Carid, CarOnweremail } = req.body;
    
    
    try {
    
    
      const bookingrequests = new Bookingrequests({ Name, Phone, CNIC, Address, SelectedCity, Date, Carid, CarOnweremail });
      await bookingrequests.save()
      res.status(201).json({ message: "Car Request submitted successfuly" });
    }
    
    catch (err) {
      console.log(err);
    }
    });
      
  
  


  module.exports = router;