const express = require("express");
const router = new express.Router();
require('../db/connection');
const User = require("../model/User");
const objectId = require('mongodb').ObjectID;




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



router.post('/updateuserdata',  async (req, res,) => {
    
     console.log(req.body)
  const { email, name, Newemail, Oldpassword , Newpassword } = req.body


  var passwordchanged = 0;
  var emailchanged = 0;
  var namechanged = 0;
  var passworderror = 0;

    try {

        const userfundd = await User.findOne({ email: email });
        if (userfundd) {
            
            
           if (Newpassword.length !== 0 ){
               if (userfundd.password === Oldpassword ){ 
                   
                
                var id = userfundd.id;   
              await User.updateOne({"_id": objectId(id)}, {$set: { password: Newpassword }});
              passwordchanged = 1;
            }
           
           
           
               else { 
                   res.status(422).json( "Please Enter correct old password to change password " ); 
                   passworderror = 1;
                }
            }





           if (Newemail.length !== 0 ){
            var id = userfundd.id;   
            await User.updateOne({"_id": objectId(id)}, {$set: { email: Newemail }});
            emailchanged = 1;
            }




           if (name.length !== 0 ){
            var id = userfundd.id;   
            await User.updateOne({"_id": objectId(id)}, {$set: { name: name }});
            namechanged = 1;
            
            }

        
        } else {
            
            res.status(422).json({ error: "something wrong" });
        }

    } catch (err) {
        console.log(err);
    }

    console.log("password =" ,passwordchanged)
    console.log("email =" ,emailchanged)
    console.log("name =" ,namechanged)
    console.log("passworderror =" ,passworderror)
    // var item = {
    //   name: req.body.title,
    //   email: req.body.content,
    //   password: req.body.author
    // };
    
    
    // var id = req.body.id;
   
    // User.updateOne({"_id": objectId(id)}, {$set: item});
  


});



module.exports = router;