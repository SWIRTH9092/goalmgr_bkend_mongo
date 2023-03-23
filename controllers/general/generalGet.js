//****************************************
//   Import dependencies
//****************************************

const express = require('express');

//****************************************
//   General Get Response
//****************************************

const generalGet = (req, res) => {
    res.send("hello world");
}

//****************************************
//   Export the controller Funciton
//****************************************

module.exports = generalGet