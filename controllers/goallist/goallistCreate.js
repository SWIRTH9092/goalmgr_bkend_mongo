//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")
const bcrypt = require("bcryptjs")

// for MongoDB database
const GoalList = require("../../models/goallist")

const goalListCreate = async (req, res) => {
    try {
        
       // create goalList key - datetime plus has key for name
       
       // get current date for root key
       const currentDate = new Date();
       const currentDateFormatted = "DT" + 
           currentDate.getFullYear() +
           (currentDate.getMonth()+1) +
           currentDate.getDate() +
           currentDate.getHours() +
           currentDate.getMinutes() +
           currentDate.getSeconds() + '-';

        // Create Hash goal list key
        const encryptHash = await bcrypt.hash(req.body.gl_Name, await bcrypt.genSalt(9))

        req.body.gl_RootKey = currentDateFormatted + encryptHash
        console.count("in goalListCreate")
        console.log("req.body", req.body)
        res.json (await GoalList.create(req.body));
        



    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = goalListCreate;
