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

const GeneralRouter = require("../routers/general");
const AuthRouter = require("../routers/user")
const GoalRouter = require("../routers/goal")

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
    app.use("/auth", AuthRouter);
    app.use("/goal", GoalRouter);

}

//****************************************
//  export Middleware Funciton
//****************************************

module.exports = middleware;