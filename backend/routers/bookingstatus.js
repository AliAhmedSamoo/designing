const express = require("express");
const router = new express.Router();
require('../db/connection');
const Bookingrequests = require("../model/Bookingrequests");
const Bookingrequestsrejected = require("../model/Bookingrequestsrejected");
const Bookingrequestsaccepted = require("../model/Bookingrequestsaccepted");
const Bookingrequestsdone = require("../model/Bookingrequestsdone");


const Deletedonereqbydate = async () => {

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 2).padStart(2, '0');
  var yyyy = today.getFullYear();


  // var dd = 17 ;
  // var mm = 08;
  // var yyyy = 2021 ;

  const Todayis = yyyy + '-' + mm + '-' + dd;



  console.log(Todayis)

  const deletetodaysdata = await Bookingrequestsdone.deleteOne({
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





router.post("/bookinggetrequestdata", async (req, res) => {

  console.log(req.body)

 



  const GettingBookingrequests = await Bookingrequests.find(req.body);

  if (GettingBookingrequests) {


    res.send(GettingBookingrequests)


  } else {
    console.log("Car Booking requests not fund")
  }





});


router.post("/bookinggetAcceptedrequestdata", async (req, res) => {

  console.log(req.body)



 

  const GettingBookingrequests = await Bookingrequestsaccepted.find(req.body);

  if (GettingBookingrequests) {


    res.send(GettingBookingrequests)

  } else {
    console.log("Car Booking requests not fund")
  }





});


router.post("/bookinggetRejectedrequestdata", async (req, res) => {

  console.log(req.body)


 


  const GettingBookingrequests = await Bookingrequestsrejected.find(req.body);

  if (GettingBookingrequests) {


    res.send(GettingBookingrequests)


  } else {
    console.log("Car Booking requests not fund")
  }





});





router.post("/deletebookingdata", async (req, res) => {

  

        const Cardeleted = await Bookingrequests.deleteOne(req.body)
        if (Cardeleted) {
          res.status(201).json({ message: "booking request rejected" });
          console.log("deleted")


        } else {
          console.log("not deleted")
        }



});


router.post("/donebookingdata", async (req, res) => {

  Deletedonereqbydate();

  const fund = await Bookingrequestsdone.find(req.body)
  if (fund) {
   res.send(fund);
    //console.log(fund)


  } else {
    console.log("not fund")
  }


});



// router.post("/acceptingbookingreqdata", async (req, res) => {
//   Deleterequestbydate();
//   console.log(req.body)
//   const requestfund = await Bookingrequests.findOne(req.body)
//   if (requestfund) {
//     const { Date, Name,email, Phone, CNIC, Address, SelectedCity, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage } = requestfund;

//     try {


//       const bookingrequestsaccepted = new Bookingrequestsaccepted({ Date, email,Name, Phone, CNIC, Address, SelectedCity, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage });
//       const requestaccepted = await bookingrequestsaccepted.save();
//       if (requestaccepted) {

//         const Cardeleted = await Bookingrequests.deleteOne(req.body)
//         if (Cardeleted) {
//           res.status(201).json({ message: "booking request accepted" });
//           console.log("deleted")


//         } else {
//           console.log("not deleted")
//         }

//       } else {

//         res.send("error")

//       }
//     }

//     catch (err) {
//       console.log(err);
//     }

//   } else {
//     res.send("error")


//   }











// });




// router.post("/donebookingreqdata", async (req, res) => {
//   Deleterequestbydate();
//   console.log(req.body)
//   const requestfund = await Bookingrequestsaccepted.findOne(req.body)
//   if (requestfund) {
//     const { Date, Name, Phone,email, CNIC, Address, SelectedCity, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage } = requestfund;

//     try {


//       const bookingrequestsdone = new Bookingrequestsdone({ Date, Name,email, Phone, CNIC, Address, SelectedCity, Carid, CarOnweremail, Carname, CarModel, Carprice, Carusername, Carnumber, Carimage });
//       const requestdone = await bookingrequestsdone.save();
//       if (requestdone) {

//         const Cardeleted = await Bookingrequestsaccepted.deleteOne(req.body)
//         if (Cardeleted) {
//           res.status(201).json({ message: "booking request done" });
//           console.log("deleted")


//         } else {
//           console.log("not deleted")
//         }

//       } else {

//         res.send("error")

//       }
//     }

//     catch (err) {
//       console.log(err);
//     }

//   } else {
//     res.send("error")


//   }











// });







module.exports = router;