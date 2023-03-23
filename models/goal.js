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
    g_parent_Id: {type: String, required: true},
    g_name: {type: String, required: true},
    g_status: {type: String, required: true},
    g_description: {type: String},
    g_measurement: {type: String},
    g_count: {type: Number, default: 0},
    g_sortOrder: {type: Number, default: 99},
    g_startDate: {type: Date},
    g_endDate: {type, Date} 
});

//****************************************
//   make goal Model
//****************************************

const Goal = model("Goal", goalSchema);

//****************************************
//  Export goal Model
//****************************************

module.exports = Goal