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
    g_U_RootKey: {type: String, required: true},
    g_Name: {type: String, required: true},
    g_Status: {type: String, required: true},
    g_Description: {type: String},
    g_Measurement: {type: String},
    g_Count: {type: Number, default: 0},
    g_SortOrder: {type: Number, default: 99},
    g_StartDate: {type: Date},
    g_EndDate: {type: Date} 
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