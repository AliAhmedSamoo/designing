const express = require("express");
const router = new express.Router();
require('../db/connection');
const User = require("../model/User");
const objectId = require('mongodb').ObjectID;




router.post("/Registor", async (req, res) => {


    console.log(req.body)


    const { name, email, password } = req.body



    try {

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "email already Exit" });


        } else {

            const user = new User({ name, email, password });
            await user.save()
            res.status(201).json({ message: "user registered successfuly" });
        }

    } catch (err) {
        console.log(err);
    }



});



// router.post('/updateuserdata', async (req, res,) => {

//     console.log(req.body)
//     const { email, name, Newemail, Oldpassword, Newpassword } = req.body

//     try {

//         const userfundd = await User.findOne({ email: email });
//         if (userfundd) {


//             if (Newpassword.length !== 0) {



//                 await User.updateOne({ "_id": objectId(id) }, { $set: { email: Newemail, name: Newemail, password: Newpassword } });
//                 res.status(200).json("Prifile Updated");


//             }
//                 else if (Newpassword.length === 0) {

//                     await User.updateOne({ "_id": objectId(id) }, { $set: { email: Newemail, name: Newemail, password: userfundd.password } });
//                     res.status(200).json("Prifile Updated");
//                 }







//                 // catch (err) { res.status(422).json("Email Exits"); }



//             }










//         } else {

//             res.status(422).json({ error: "something wrong" });
//         }

//     } catch (err) {
//         console.log(err);
//     }


// });



module.exports = router;