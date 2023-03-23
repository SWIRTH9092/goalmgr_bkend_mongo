//****************************************
//   import dependencies
//****************************************

require("dotenv").config();
const express = require('express');
const morgan = require('morgan');  //required for logging
const cors = require('cors');  //required for cors

//****************************************
//   routers
//****************************************

//****************************************
//   middleware
//****************************************

const middleware =(app) => {
    app.use(express.json());
    app.use(morgan("dev"));
    app.use(cors());

    //****************************************
    //   routers
    //****************************************

    app.use("/", GeneralRouter);

}

//****************************************
//  export Middleware Funciton
//****************************************

module.exports = middleware;