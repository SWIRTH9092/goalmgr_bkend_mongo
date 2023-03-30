//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")

// for MongoDB database
const GoalList = require("../../models/goallist")

const goalListShow = async (req, res) => {
    try {
        res.json(await GoalList.findByIdAndUpdate({ "_id": req.params.id}, req.body, {new:true}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = goalListShow;