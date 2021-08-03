const express = require("express");
const router = new express.Router();
require('../db/connection');
const ReqCar = require("../model/ReqCar");
const multer = require('multer')

const multerConfig = multer.diskStorage({

 
  destination: (req, file, callback) => {

    callback(null,'../frontend/src/Carimages')
    const filenamee = file.filename;
  },

  // filename: (req,file,callback) => {
    
  //   const ext = file.mimetype.split ('/')[1]
  //  callback(null, filenamee +'.'+ ext);
  // }
});




const uploadimg = multer({

 storage: multerConfig


})


const uploadimage = uploadimg.single('photo')


router.post("/reqforCarregisteration",uploadimage, async (req, res) => {
 
    
    console.log(req.file)
  
 
  const { username, email, Carname, Model, price, number, tag } = req.body;
  const image = req.file.filename

 console.log(req.body)
 console.log(req.file)



  try {


    const reqCar = new ReqCar({ username, email, Carname, Model, price, number, tag, image });
    await reqCar.save()
    res.status(201).json({ message: "Car Request submitted successfuly" });
  }

  catch (err) {
    console.log(err);
  }
});



router.get("/getcarreqdata", async (req, res)=>{

  ReqCar.find()
          .then(ReqCar => res.send(ReqCar))
    


});



router.get("/deletecarreqdata", async (req, res)=>{

   ReqCar.find()
           .then(ReqCar => res.send(ReqCar))
    
console.log(res)

});


module.exports = router;