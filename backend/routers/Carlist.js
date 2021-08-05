const express = require("express");
const router = new express.Router();
require('../db/connection');
const Carlist = require("../model/Carlist");


router.get("/getdatafromCarlist", async (req, res)=>{

    Carlist.find()
            .then(Carlist => res.send(Carlist))
 
  
  
  });

  module.exports = router;