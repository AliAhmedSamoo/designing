//const jwt = require('jsonwebtoken');
const express = require("express");
const router = new express.Router();
//const brycpt = require('bcryptjs');
//const authenticate = require('../middleware/authenticate');
require('../db/connection');
const User = require("../model/User");
const nodemailer = require("nodemailer");






router.post("/signin", async (req, res) => {


    //  console.log(req.body)



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
            if (password != userLogin.password) {
                res.status(400).json("Invalid email and password");
            }
            else {

                res.status(200).json(userLogin.name);


            }

        } else {
            res.status(400).json("Invalid credientials");
        }


    } catch (err) {
        console.log(err);
    }

});




router.post("/getuserdata", async (req, res) => {
    console.log(req.body)
    try {


        const { email } = req.body;



        const userLogin = await User.findOne({ email: email });






        res.json(userLogin.name);



    } catch (err) {
        console.log(err);
    }


});



router.post("/emailuserpass", async (req, res) => {
    console.log(req.body)
    try {






        const userfund = await User.findOne(req.body);

        if (userfund) {
           
            


            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: false, 
                auth: {
                  user: "aliahmed.samoo.1@gmail.com", // generated ethereal user
                  pass: "alidell1", // generated ethereal password
                },
              });
            
              // send mail with defined transport object
              let info = await transporter.sendMail({
                from: '"Rent A Car" <aliahmed.samoo.1@gmail.com>', // sender address
                to: userfund.email, // list of receivers
                subject: "Rend A Car - Forget password ", // Subject line
                text: "Rend A Car - Forget password ", // plain text body
                html: `<h1> <b>Hello ${userfund.name}</h1>     <h3>here is password of your Account = "${userfund.password}"</h3> `, // html body
              });
            
              console.log("Message sent: %s", info.messageId);



            res.status(200).json("Password has been sent on your email");
        } else {
            res.status(400).json("user not fund");

        }
    } catch (err) {
        res.status(400).json("Something wrong happened with server please again");
        console.log(err);
    }

});




module.exports = router;