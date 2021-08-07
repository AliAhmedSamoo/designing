const express = require("express");
const router = new express.Router();
require('../db/connection');
const Carlist = require("../model/Carlist");
const User = require("../model/User");


router.get("/getCarsdatatocount", async (req, res)=>{

    const Carss = await Carlist.find()
            
      res.json(Carss.length)
  
  
  });

  router.get("/getUsersdatatocount", async (req, res)=>{

    const Users = await User.find()
            
      res.json(Users.length)
  
  
  });

module.exports = router;