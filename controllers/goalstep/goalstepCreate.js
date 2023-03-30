//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")

// for MongoDB database
const GoalStep = require("../../models/goalstep")

const goalStepCreate = async (req, res) => {
    try {
        res.json (await GoalStep.create(req.body));

    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = goalStepCreate;
