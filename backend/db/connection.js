const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rentacar:rentacar@cluster0.bdvim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection is successfull with DataBase");
}).catch((err)=>{
    console.log("no connection with DataBase check your connection with monogoDB");
}) 
    