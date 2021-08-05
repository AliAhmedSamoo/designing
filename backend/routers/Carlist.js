const express = require("express");
const router = new express.Router();
require('../db/connection');
const Carlist = require("../model/Carlist");


router.get("/getdatafromCarlist", async (req, res)=>{

    Carlist.find()
            .then(Carlist => res.send(Carlist))
 
  
  
  });

  router.post("/getRequestedCardata", async (req, res)=>{

    console.log(req.body)
    const Carfound = await Carlist.findOne(req.body);
    if (Carfound){





      
    res.json(Carfound);
     
  }else{
    console.log("Car not fund")
       }
    });

  module.exports = router;