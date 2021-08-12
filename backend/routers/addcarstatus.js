const express = require("express");
const router = new express.Router();
require('../db/connection');
const ReqCar = require("../model/ReqCar");
const Carlist = require("../model/Carlist");


router.post("/getdatafromCarlistforstatu", async (req, res) => {
    console.log(req.body.email)
    const reqcar = await Carlist.find({ email : req.body.email });
      res.send(reqcar)
  
  
  
  });


  router.post("/getdatafromreqCarlistformstatus", async (req, res) => {
    console.log(req.body)
  
  
    const reqcar = await ReqCar.find({ email : req.body.email });
    res.send(reqcar)
  
  
  });

 

  module.exports = router;