const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/rent_a_car",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection is successfull with DataBase");
}).catch((err)=>{
    console.log("no connect with DataBase ");
}) 
    
