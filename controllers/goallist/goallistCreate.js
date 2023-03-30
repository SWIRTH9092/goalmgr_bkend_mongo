//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")

// for MongoDB database
const GoalList = require("../../models/goallist")

const goalListCreate = async (req, res) => {
    try {
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
