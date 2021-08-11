const express = require("express");
const router = new express.Router();
require('../db/connection');
const ReqCar = require("../model/ReqCar");
const Carlist = require("../model/Carlist");
const multer = require('multer')
const fs = require('fs')




router.post("/reqforCarregisteration", async (req, res) => {
 
    
    console.log(req.file)
  
 
  const { username, email, Carname, Model, price, number, image, Carimageid } = req.body;
  


  try {


    const reqCar = new ReqCar({ username, email, Carname, Model, price, number, image , Carimageid });
    await reqCar.save()
    res.status(200).json("Request to register your car has been submited successfuly");
  }

  catch (err) {
    console.log(err);
    res.status(422).json("error");
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


const { username, email, Carname, Model, price, number, image } = req.body;
// const image = req.file.filename

//console.log(email)
// console.log(req.file)



try {


  const carlist = new Carlist({ username, email, Carname, Model, price, number, image });
  await carlist.save()
  res.status(201).json({ message: "Car Request submitted successfuly" });
}

catch (err) {
  console.log(err);
}
});


module.exports = router;