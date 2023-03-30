//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")
const bcrypt = require("bcryptjs")



// for MongoDB database
const User = require("../../models/user")

const userSignup = async (req, res) => {
    try {
        //  hash password
        req.body.u_Password = await bcrypt.hash(req.body.u_Password, await bcrypt.genSalt(10))
        
        res.json (await User.create(req.body));
        
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = userSignup;
