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

const goalstepSchema = new Schema ({
    gs_parent_Id: {type: String, required: true},
    gs_name: {type: String, required: true},
    gs_status: {type: String, required: true},
    gs_description: {type: String},
    gs_measurement: {type: String},
    gs_count: {type: Number, default: 0},
    gs_sortOrder: {type: Number, default: 99},
    gs_startDate: {type: Date},
    gs_endDate: {type, Date} 
});

//****************************************
//   make goal step Model
//****************************************

const Goalstep = model("Goalstep", goalstepSchema);

//****************************************
//  Export goal step Model
//****************************************

module.exports = Goalstep