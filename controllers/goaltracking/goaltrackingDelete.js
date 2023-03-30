//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")

// for MongoDB database
const GoalTracking = require("../../models/goaltracking")

const goalTrackingDelete = async (req, res) => {
    try {
        res.json(await GoalTracking.deleteOne({ "_id": req.params.id}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = goalTrackingDelete;