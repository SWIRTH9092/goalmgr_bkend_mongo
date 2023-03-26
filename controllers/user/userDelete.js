//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const User = require("../../models/user")

const userDelete = async (req, res) => {
    try {
        // send user to delete
        console.count("in delete")
        const userid = req.payload.u_Userid;
        console.count("in delete")
        if (req.body.u_Userid === userid) {
            if (req.params.id === userid) {
                res.json(await User.findByIdAndRemove(req.params.id))  
                res.
                    clearCookie("token").
                    json({ response: "Your userid id has been deleted" });  
            console.count("in delete") 
            } else {
                res.status(400).json("error: Username mismatch");
            }
        } else {
            res.status(400).json("error: Username mismatch");            
        }
            
    } catch (error) {
        //send error
        res.status(400).json(error);
    }

};

//----------------------------
//  Export controller function
//----------------------------

module.exports = userDelete
