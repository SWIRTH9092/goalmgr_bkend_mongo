//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")

//login Post

const userLogout = async (req, res) => {
    //logout post
    res.clearCookie("token").json({ response: "You are Logged Out" });
}; 

//----------------------------
//  Export controller function
//----------------------------

module.exports = userLogout
