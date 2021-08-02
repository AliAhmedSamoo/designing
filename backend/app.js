const dotenv = require("dotenv")
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");

dotenv.config({ path: './config.env'});
require("./db/connection");

app.use(express.json());

app.use(cors()) 

app.use(require('./routers/Userssiginandsignup'));
app.use(require('./routers/requestforcar'));
app.use(require('./routers/signin&signout'));
app.use(require('./routers/yourmessege'));

const port = process.env.PORT || 5000;




server.listen(5000, ()=>{ 
     console.log(`port is runing ${port}`);
 })