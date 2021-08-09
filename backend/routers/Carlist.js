const express = require("express");
const router = new express.Router();
require('../db/connection');
const Carlist = require("../model/Carlist");
const User = require("../model/User");

router.get("/getdatafromCarlist", async (req, res) => {

  Carlist.find()
    .then(Carlist => res.send(Carlist))



});

router.post("/getRequestedCardata", async (req, res) => {

  console.log(req.body)
  const Carfound = await Carlist.findOne(req.body);
  if (Carfound) {






    res.json(Carfound);

  } else {
    console.log("Car not fund")
  }
});


router.post("/searchardataaa", async (req, res) => {

  console.log(req.body)


  console.log(req.body)
  const Carfound = await Carlist.find(req.body);
  if (Carfound.length != 0 ) {






    res.status(200).json(Carfound);

  } else {
    res.status(201).json("Car not fund")
  }

});




router.post("/getuserdata", async (req, res) => {
  try {
    let token;


    const { email, password } = req.body;



    const userLogin = await User.findOne({ email: email });

    if (userLogin) {

      //  token = await userLogin.generateAuthToken();
      //  console.log(token);
      //  res.cookie('jwtoken', token,{
      //     expires: new Date(Date.now()+ 25892000000),
      //     httpOnly:true
      // });
      console.log(userLogin)

    } else {
      console.log("hsjhasj")
    }


  } catch (err) {
    console.log(err);
  }


});

module.exports = router;