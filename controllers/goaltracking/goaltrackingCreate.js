//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")

// for MongoDB database
const GoalTracking = require("../../models/goaltracking")

const goalTrackingCreate = async (req, res) => {
    try {
        res.json (await GoalTracking.create(req.body));

    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = goalTrackingCreate;
