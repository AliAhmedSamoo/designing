const dotenv = require("dotenv")
const cors = require("cors");
const mongoose = require('mongoose');
const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();
const http = require("http");
const server = http.createServer(app);



// app.use(cookieParser());
// dotenv.config({ path: './config.env'});
require("./db/connection");

// app.use(express.json());
// app.use(require('./routers/rent_a_cars'));
// app.use(cors()) 



const port = process.env.PORT || 5000;




server.listen(5000, ()=>{ 
     console.log(`port is runing ${port}`);
 })