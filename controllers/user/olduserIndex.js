//****************************************
//  Import Dependencies
//****************************************

const express = require("express");

//**  for MOngoDB database 
const User = require("../../models/user")

const userIndex = async(req, res) => {
    try {
        // get all users
        res.json(await User.find({}));
    }
    catch (error) {
        //send error
        res.status(400).json(error);
    }
}

//****************************************
//  export controller function
//****************************************

module.exports = userIndex;