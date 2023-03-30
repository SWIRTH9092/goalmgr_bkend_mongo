//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")

// for MongoDB database
const GoalList = require("../../models/goallist")

const goalListDelete = async (req, res) => {
    try {
        res.json(await GoalList.deleteOne({ "_id": req.params.id}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = goalListDelete;