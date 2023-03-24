//****************************************
//   import dependencies
//****************************************

const mongoose = require("./connection");

//****************************************
//   Define Goal Tracking Model
//****************************************

const {Schema, model } = mongoose;

//****************************************
//   GoalTracking Schema
//****************************************

const goalTrackingSchema = new Schema ({
    gt_Parent_Id: {type: String, required: true},
    gt_Date: {type: String},
    gt_Count: {type: Number},
    gt_CompletedForDay: {type: Boolean}
}, 
{timestamps: true});

//****************************************
//   make goal Tracking Model
//****************************************

const GoalTracking = model("GoalTracking", goalTrackingSchema);

//****************************************
//  Export goal tracking Model
//****************************************

module.exports = GoalTracking