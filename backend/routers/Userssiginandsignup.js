const express = require("express");
const router = new express.Router();
require('../db/connection');
const User = require("../model/User");




router.post("/Registor", async (req, res) => {

    const { name, email, password, cpassword } = req.body;






    try {

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "email already Exit" });
        } else if (password != cpassword) {
            
           return res.status(400).json({ error: "password are not matching " });
        
        } else {
            
            const user = new User({ name, email, password, cpassword });
            await user.save()
            res.status(201).json({ message: "user registered successfuly" });
        }

    } catch (err) {
        console.log(err);
    }



});



module.exports = router;