const express = require("express");
const router = new express.Router();
require('../db/connection');
const Bookingrequests = require("../model/Bookingrequests");


router.post("/getbookingformdata", async (req, res) => {

  console.log(req.body)
  const { Name, Phone, CNIC, Address, SelectedCity, Date, Carid, CarOnweremail, Carname, CarModel, Carusername, Carnumber, Carimage,Carprice } = req.body;



  try {


    const bookingrequests = new Bookingrequests({ Name, Phone, CNIC, Address, SelectedCity, Date, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage });
    await bookingrequests.save()
    res.status(201).json({ message: "Car Request submitted successfuly" });
  }

  catch (err) {
    console.log(err);
  }
});


router.post("/getrequestdata", async (req, res) => {

  console.log(req.body)

 



    const GettingBookingrequests = await Bookingrequests.find({ CarOnweremail: req.body.Useremail });

    if (GettingBookingrequests) {


      res.send(GettingBookingrequests)
console.log(GettingBookingrequests)

    } else {
      console.log("Car Booking requests not fund")
    }





});







module.exports = router;