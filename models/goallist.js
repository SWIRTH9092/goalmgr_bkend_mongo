//****************************************
//   import dependencies
//****************************************

const mongoose = require("./connection");

//****************************************
//   Define Schema, Model
//****************************************

const { Schema, model } = mongoose;

//****************************************
//   Goal List Schema
//****************************************

const goalListSchema = new Schema ({
    gl_URootKey: {type: String, required: true},
    gl_RootKey: {type: String, required: true},
    gl_Name: {type: String, required: true},
    gl_Stat: {type: String, required: true},
    gl_Description: {type: String},
    gl_StartDate: {type: String},
    gl_EndDate: {type: String},
    gl_SortOrder: {type: Number, default: 99},
}, {timestamps: true});

//****************************************
//   make goalList Model
//****************************************

const GoalList = model("GoalList", goalListSchema);

//****************************************
//  Export GoalList Model
//****************************************

module.exports = GoalList