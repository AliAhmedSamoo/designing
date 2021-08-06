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


router.post("/searchardata", async (req, res) => {

  console.log(req.body)




  try {
    


  // const { search } = req.body;
    

//  const email =  "email: 'aliahmed.samoo.1@gmail.com'" ;

    const searchbyemail = await Carlist.find(req.body);

    if (searchbyemail) {


      res.send(searchbyemail)



    } else {

      const searchbyusername = await Carlist.findOne(req.body);

      if (searchbyusername) {


        res.send(searchbyusername)



      } else {

        const searchbyCarname = await Carlist.findOne(req.body);

        if (searchbyCarname) {


          res.send(searchbyCarname)



        } else {

          const searchbyModel = await Carlist.findOne(req.body);

          if (searchbyModel) {


            res.send(searchbyModel)



          } else {


            res.send("Car not fund")
          }


        }


      

    }
  }

  } catch (err) {
  console.log(err);
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