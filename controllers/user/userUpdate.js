//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const User = require("../../models/user")


const userUpdate = async (req, res) => {
    try {
        //  update bookmark
        res.json (
            await User.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
    
    //res.send("Update bookmark controller")
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = userUpdate
