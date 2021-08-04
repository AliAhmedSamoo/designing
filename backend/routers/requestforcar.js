const express = require("express");
const router = new express.Router();
require('../db/connection');
const ReqCar = require("../model/ReqCar");
const Carlist = require("../model/Carlist");
const multer = require('multer')
const fs = require('fs')


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







router.post("/deletecarreqdatarejectedcar", async (req, res)=>{
   
   const Cardeleted = await  ReqCar.deleteOne(req.body)
  if (Cardeleted){
    res.status(201).json({ message: "Car has been deleted" });
    console.log("deleted")
   

}else{
  console.log("not deleted")
     }   
const path = 'C:/Users/Samoo/Documents/GitHub/frontend-design/frontend/src/Carimages/'+req.body.image;

try {
  fs.unlinkSync(path)
} catch(err) {
  console.error(err)
}
 console.log(req.body)

});


router.post("/deletecarreqdata", async (req, res)=>{
  
   const Cardeleted = await  ReqCar.deleteOne(req.body)
  if (Cardeleted){
    res.status(201).json({ message: "Car has been deleted" });
    console.log("deleted")
 

}else{
  console.log("not deleted")
     }



});





router.post("/saverecartolistdb", async (req, res) => {
 
    
   console.log(req.body)


const { username, email, Carname, Model, price, number, tag, image } = req.body;
// const image = req.file.filename

//console.log(email)
// console.log(req.file)



try {


  const carlist = new Carlist({ username, email, Carname, Model, price, number, tag, image });
  await carlist.save()
  res.status(201).json({ message: "Car Request submitted successfuly" });
}

catch (err) {
  console.log(err);
}
});


module.exports = router;