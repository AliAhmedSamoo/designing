const express = require("express");
const router = new express.Router();
require('../db/connection');
const User = require("../model/User");




router.post("/Registor", async (req, res) => {

    
    console.log(req.body)


    const {name, email, password} = req.body



    try {

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "email already Exit" });
       
        
        } else {
            
            const user = new User({ name, email, password});
            await user.save()
            res.status(201).json({ message: "user registered successfuly" });
        }

    } catch (err) {
        console.log(err);
    }



});



module.exports = router;