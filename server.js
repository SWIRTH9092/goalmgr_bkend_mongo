//****************************************
//   Dependencies
//****************************************

require ("dotenv").config();

//****************************************
// import express
//****************************************

const express = require("express");

//****************************************
//create objects
//****************************************

const app = express();
const middleware = require("./utils/middleware");


//****************************************
// Middleware
//****************************************

middleware(app);

//****************************************
//   Listener
//****************************************

const { PORT = 3001 } = process.env;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));