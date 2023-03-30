//****************************************
//   import dependencies
//****************************************

const mongoose = require("./connection");

//****************************************
//   Define Goal Step Model
//****************************************

const {Schema, model } = mongoose;

//****************************************
//   GoalStep Schema
//****************************************

const goalStepSchema = new Schema ({
    gs_URootKey: {type: String, required: true},
    gs_GLRootKey: {type: String, required: true},
    gs_Name: {type: String, required: true},
    gs_Stat: {type: String, required: true},
    gs_Description: {type: String},
    gs_Measurement: {type: String},
    gs_CountGoal: {type: Number, default: 0},
    gs_SortOrder: {type: Number, default: 99},
    gs_StartDate: {type: String},
    gs_EndDate: {type: String} 
}, 
{timestamps: true});

//****************************************
//   make goal step Model
//****************************************

const GoalStep = model("GoalStep", goalStepSchema);

//****************************************
//  Export goal step Model
//****************************************

module.exports = GoalStep