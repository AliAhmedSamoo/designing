const express = require("express");
const router = new express.Router();
require('../db/connection');
const Bookingrequests = require("../model/Bookingrequests");
const Bookingrequestsrejected = require("../model/Bookingrequestsrejected");
const Bookingrequestsaccepted = require("../model/Bookingrequestsaccepted");
const Bookingrequestsdone = require("../model/Bookingrequestsdone");



const Deleterequestbydate = async () => {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();


  // var dd = 17 ;
  // var mm = 08;
  // var yyyy = 2021 ;

  const Todayis = yyyy + '-' + mm + '-' + dd;



  console.log(Todayis)

  const deletetodaysdata = await Bookingrequestsrejected.deleteOne({
    Date: {

      $all: [Todayis]


    }




  })

  if (deletetodaysdata) {
    console.log(deletetodaysdata)

  }
  else {
    console.log("not fund")

  }


}










router.post("/getbookingformdata", async (req, res) => {

  console.log(req.body)
  const { Name, email, Phone, CNIC, Address, SelectedCity, Date, Carid, CarOnweremail, Carname, CarModel, Carusername, Carnumber, Carimage, Carprice } = req.body;



  try {


    const bookingrequests = new Bookingrequests({ Name,email, Phone, CNIC, Address, SelectedCity, Date, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage });
    await bookingrequests.save()
    res.status(201).json({ message: "Request Rejec successfuly" });
  }

  catch (err) {
    console.log(err);
  }
});


router.post("/getrequestdata", async (req, res) => {

  console.log(req.body)

  Deleterequestbydate();



  const GettingBookingrequests = await Bookingrequests.find({ CarOnweremail: req.body.Useremail });

  if (GettingBookingrequests) {


    res.send(GettingBookingrequests)


  } else {
    console.log("Car Booking requests not fund")
  }





});


router.post("/getAcceptedrequestdata", async (req, res) => {

  console.log(req.body)



  Deleterequestbydate();

  const GettingBookingrequests = await Bookingrequestsaccepted.find({ CarOnweremail: req.body.Useremail });

  if (GettingBookingrequests) {


    res.send(GettingBookingrequests)

  } else {
    console.log("Car Booking requests not fund")
  }





});


router.post("/getRejectedrequestdata", async (req, res) => {

  console.log(req.body)


  Deleterequestbydate();


  const GettingBookingrequests = await Bookingrequestsrejected.find({ CarOnweremail: req.body.Useremail });

  if (GettingBookingrequests) {


    res.send(GettingBookingrequests)


  } else {
    console.log("Car Booking requests not fund")
  }





});





router.post("/deletebookingreqdata", async (req, res) => {

  Deleterequestbydate();
  const requestfund = await Bookingrequests.findOne(req.body)
  if (requestfund) {
    const { Date, Name, Phone,email, CNIC, Address, SelectedCity, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage } = requestfund;

    try {


      const bookingrequestsrejected = new Bookingrequestsrejected({ Date,email, Name, Phone, CNIC, Address, SelectedCity, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage });
      const requestrejected = await bookingrequestsrejected.save();
      if (requestrejected) {

        const Cardeleted = await Bookingrequests.deleteOne(req.body)
        if (Cardeleted) {
          res.status(201).json({ message: "booking request rejected" });
          console.log("deleted")


        } else {
          console.log("not deleted")
        }

      } else {

        res.send("error")

      }
    }

    catch (err) {
      console.log(err);
    }

  } else {
    res.send("error")


  }

});



router.post("/acceptingbookingreqdata", async (req, res) => {
  Deleterequestbydate();
  console.log(req.body)
  const requestfund = await Bookingrequests.findOne(req.body)
  if (requestfund) {
    const { Date, Name,email, Phone, CNIC, Address, SelectedCity, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage } = requestfund;

    try {


      const bookingrequestsaccepted = new Bookingrequestsaccepted({ Date, email,Name, Phone, CNIC, Address, SelectedCity, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage });
      const requestaccepted = await bookingrequestsaccepted.save();
      if (requestaccepted) {

        const Cardeleted = await Bookingrequests.deleteOne(req.body)
        if (Cardeleted) {
          res.status(201).json({ message: "booking request accepted" });
          console.log("deleted")


        } else {
          console.log("not deleted")
        }

      } else {

        res.send("error")

      }
    }

    catch (err) {
      console.log(err);
    }

  } else {
    res.send("error")


  }











});




router.post("/donebookingreqdata", async (req, res) => {
  Deleterequestbydate();
  console.log(req.body)
  const requestfund = await Bookingrequestsaccepted.findOne(req.body)
  if (requestfund) {
    const { Date, Name, Phone,email, CNIC, Address, SelectedCity, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage } = requestfund;

    try {


      const bookingrequestsdone = new Bookingrequestsdone({ Date, Name,email, Phone, CNIC, Address, SelectedCity, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage });
      const requestdone = await bookingrequestsdone.save();
      if (requestdone) {

        const Cardeleted = await Bookingrequestsaccepted.deleteOne(req.body)
        if (Cardeleted) {
          res.status(201).json({ message: "booking request done" });
          console.log("deleted")


        } else {
          console.log("not deleted")
        }

      } else {

        res.send("error")

      }
    }

    catch (err) {
      console.log(err);
    }

  } else {
    res.send("error")


  }











});







module.exports = router;