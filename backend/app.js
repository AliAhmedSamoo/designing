const dotenv = require("dotenv")
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);


// dotenv.config({ path: './config.env'});
require("./db/connection");

// app.use(express.json());
//app.use(require('./routers/Userssiginandsignup'));
// app.use(cors()) 

app.post("/Registor", async(req,res)=>{
    console.log(req.body);
});


const port = process.env.PORT || 5000;




server.listen(5000, ()=>{ 
     console.log(`port is runing ${port}`);
 })