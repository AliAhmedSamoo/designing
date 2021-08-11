const express = require("express");
const router = new express.Router();
require('../db/connection');
const User = require("../model/User");
const objectId = require('mongodb').ObjectID;
const Usertoactive = require("../model/Usertoactive");



router.post("/Registor", async (req, res) => {


    console.log(req.body)


    const { name, email, password, OTP } = req.body



    try {

        const userExist = await Usertoactive.findOne({ email: email });
        if (userExist) {

            if (userExist.OTP === OTP) {

                const user = new User({ name, email, password });
                await user.save()
                res.status(200).json("Account Registerd Please Sign in to continue");


            }


            else {

                res.status(422).json("OTP Enterd is wrong please try again ");
            }
        } else {

            // const user = new User({ name, email, password });
            // await user.save()

            res.status(422).json("OTP expired Please sign up again");
        }

    } catch (err) {
        console.log(err);
    }



});



router.post('/deleteaccount', async (req, res,) => {

    console.log(req.body)
    const { email, Oldpassword } = req.body

    try {

        const userfundd = await User.findOne({ email: email });
        if (userfundd) {
            if (userfundd.password === Oldpassword) {






                await User.deleteOne({ email: email });
                res.status(200).json("Account Deleted");











            } else {

                res.status(422).json("Please Enter correct Old Password");

            }









        } else {

            res.status(422).json({ error: "something wrong" });
        }

    } catch (err) {
        console.log(err);
    }


});




router.post('/updateuserdata', async (req, res,) => {

    console.log(req.body)
    const { email, name, Oldpassword, Newpassword } = req.body

    try {

        const userfundd = await User.findOne({ email: email });
        if (userfundd) {
            if (userfundd.password === Oldpassword) {

                const id = userfundd._id;


                if (Newpassword.length !== 0) {

                    await User.updateOne({ "_id": objectId(id) }, { $set: { name: name, password: Newpassword } });
                    res.status(200).json("Prifile Updated");

                }





                else if (Newpassword.length === 0) {

                    await User.updateOne({ "_id": objectId(id) }, { $set: { name: name, password: userfundd.password } });
                    res.status(200).json("Prifile Updated");
                }



            } else {

                res.status(422).json("Please Enter correct Old Password");

            }









        } else {

            res.status(422).json({ error: "something wrong" });
        }

    } catch (err) {
        console.log(err);
    }


});




router.post("/deleteUserrdattaaa", async (req, res)=>{
    console.log(req.body)
   const Cardeleted = await  User.deleteOne(req.body)
  if (Cardeleted){
    res.status(201).json({ message: "User has been deleted" });
    console.log("deleted")
   
 
 }else{
  console.log("not deleted")
     }   
 
 
 console.log(req.body)
 
 });





 router.post("/checkuserispresent", async (req, res)=>{
    console.log(req.body)
   const userfound = await  User.findOne(req.body)
  if (userfound){
    res.status(200).json({ message: "User found" });
    
   console.log("User found")
 
 }else{
    res.status(422).json({ message: "User not found" });
     }   
     console.log("User not found")
 
 console.log(req.body)
 
 });










module.exports = router;