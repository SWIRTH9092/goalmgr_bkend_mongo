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
        
        // create root key - datetime plus has key for userid
        
        // get current date for root key
        const currentDate = new Date();
        const currentDateFormatted = "DT" + 
            currentDate.getFullYear() +
            (currentDate.getMonth()+1) +
            currentDate.getDate() +
            currentDate.getHours() +
            currentDate.getMinutes() +
            currentDate.getSeconds() + '-';

        // hash userid for root document finding
        
        const encryptHash = await bcrypt.hash(req.body.u_Userid, await bcrypt.genSalt(10))
        req.body.u_RootKey = currentDateFormatted + encryptHash
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
