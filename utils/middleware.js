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
const GoalListRouter = require("../routers/goallist")
const GoalStepRouter = require("../routers/goalstep")
const GoalTrackingRouter = require("../routers/goaltracking")
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
    app.use("/goallist", GoalListRouter);
    app.use("/goalstep", GoalStepRouter);
    app.use("/goaltracking", GoalTrackingRouter);
}

//****************************************
//  export Middleware Funciton
//****************************************

module.exports = middleware;