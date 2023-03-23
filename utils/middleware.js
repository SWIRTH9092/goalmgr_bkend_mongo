//****************************************
//   import dependencies
//****************************************

require("dotenv").config();
const express = require('express');

//****************************************
//   middleware
//****************************************

const middleware =(app) => {
    app.use(express.json())
}

//****************************************
//  export Middleware Funciton
//****************************************

module.exports = middleware;