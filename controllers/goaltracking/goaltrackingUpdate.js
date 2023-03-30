//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")

// for MongoDB database
const GoalTracking = require("../../models/goalTracking")

const goalTrackingUpdate = async (req, res) => {
    try {
        res.json(await GoalTracking.findByIdAndUpdate({ "_id": req.params.id}, req.body, {new:true}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = goalTrackingUpdate;