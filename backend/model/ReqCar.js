const mongoose = require("mongoose");
const validator = require("validator");





const rent_a_car = new mongoose.Schema({
    username:{
        type : String,
        required:true,        
    },
    
        email:{
            type:String,
            required:true,
             validate(value){
              if(!validator.isEmail(value)){
                  throw new Error("invalide email")
              }
            }
        },
 
        Brand:{
            type : String,
            required:true,        
        },
        model:{
            type : String,
            required:true,        
        },
    
    
        price:{
            type : String,
            required:true,        
        },
        

        number:{
            type : String,
            required:true,        
        },

       tag:{
            type : Array,
            required:true,        
        },


});

rent_a_car.pre('save', async function(next){

    next();
});



const ReqCar = new mongoose.model('ReqCar', rent_a_car)
module.exports = ReqCar;