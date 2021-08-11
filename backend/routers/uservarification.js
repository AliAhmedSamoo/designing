const express = require("express");
const router = new express.Router();
require('../db/connection');
const Usertoactive = require("../model/Usertoactive");
const objectId = require('mongodb').ObjectID;
const User = require("../model/User");
const nodemailer = require("nodemailer");


router.post("/Userssiginandsignup", async (req, res) => {







    console.log(req.body)
    try {

        const { name, email, password } = req.body

        const userExist = await User.findOne({ email: email });

        console.log()

        if (userExist) {

            return res.status(422).json({ error: "email already Exit " });




        } else {

            const userExist2 = await Usertoactive.findOne({ email: email });
            if (userExist2) {
                return res.status(422).json("something wrong please try again later after few minutes");


            } else {

                try {

                    var OTP = Math.floor(Math.random() * 100000) + 1;
                    console.log(OTP)
                    const usertoactive = new Usertoactive({ name, email, password, OTP });
                    await usertoactive.save()

                    const deletedata = async () => {
                        await Usertoactive.deleteOne({ email: email });

                    }




                    setTimeout(deletedata, 300000)


                    let transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 587,
                        secure: false,
                        auth: {
                            user: "aliahmed.samoo.4@gmail.com", // generated ethereal user
                            pass: "alidell11", // generated ethereal password
                        },
                    });

                    // send mail with defined transport object
                    let info = await transporter.sendMail({
                        from: '"Rent A Car" <aliahmed.samoo.4@gmail.com>', // sender address
                        to: email, // list of receivers
                        subject: "Rend A Car - OTP ", // Subject line
                        text: "Rend A Car - Forget password ", // plain text body
                        html: `<h1> <b>Hello ${name}</h1>     <h3>here is OTP for your Account = "${OTP}"</h3> <p> this will exprie within 5 min if you fail to enter your OTP within 5 min, please try singn up again after few minutes</p> `, // html body
                    });

                    console.log("Message sent: %s", info.messageId);
                   
                } catch (err) {
                    console.log(err)
                    return res.status(422).json("something wrong with server");
                }



                res.status(200).json("OTP has been sent to your email (if not found check spam too)");


            }





        }

    } catch (err) {
        console.log(err);
    }



});


router.get("/getalluserdata", async (req, res)=>{

    User.find()
    .then(Carlist => res.json(Carlist))
  
  });



module.exports = router;