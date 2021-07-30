const express = require("express");
const router = new express.Router();
require('../db/connection');
const ReqCar = require("../model/ReqCar");

router.post("/getcarreqdata", async (req, res) => {

    console.log('data displayed')



});



module.exports = router;