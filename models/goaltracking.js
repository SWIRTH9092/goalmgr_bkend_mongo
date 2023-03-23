//****************************************
//   import dependencies
//****************************************

const mongoose = require("./connection");

//****************************************
//   Define Goal Step Model
//****************************************

const {Schema, model } = mongoose;

//****************************************
//   GoalTracking Schema
//****************************************

const goaltrackingSchema = new Schema ({
    gt_parent_Id: {type: String, required: true},
    gt_date: {type: String},
    gt_count: {type: Number},
    gt_completedForDay: {type: Boolean}
});

//****************************************
//   make goal Tracking Model
//****************************************

const Goaltracking = model("Goaltracking", goaltrackingSchema);

//****************************************
//  Export goal tracking Model
//****************************************

module.exports = Goaltracking