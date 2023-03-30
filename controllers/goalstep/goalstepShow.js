//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")

// for MongoDB database
const GoalStep = require("../../models/goalstep")

const goalStepShow = async (req, res) => {
    try {
        res.json(await GoalStep.findById({ "_id": req.params.id}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = goalStepShow;