//****************************************
//   import dependencies
//****************************************

const mongoose = require("./connection");

//****************************************
//   Define goal Model
//****************************************

const {Schema, model } = mongoose;

//****************************************
//  Goal Schema
//****************************************

const goalSchema = new Schema ({
    g_URootKey: {type: String, required: true},
    g_GoalName: {type: String, required: true},
    g_GoalStatus: {type: String, required: true},
    g_GoalDescription: {type: String},
    g_GoalSortOrder: {type: Number, default: 99},
    g_GoalStartDate: {type: String},
    g_GoalEndDate: {type: String} 
    }, 
    {timestamps: true});

//****************************************
//   make goal Model
//****************************************

const Goal = model("Goal", goalSchema);

//****************************************
//  Export goal Model
//****************************************

module.exports = Goal