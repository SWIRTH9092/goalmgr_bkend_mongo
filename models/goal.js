//****************************************
//   import dependencies
//****************************************

const { stringify } = require("querystring");
const mongoose = require("./connection");

//****************************************
//   Define User Model
//****************************************

const {Schema, model } = mongoose;

//****************************************
//   User Schema
//****************************************

const userSchema = new Schema ({
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
//   make user Model
//****************************************

const User = model("User", userSchema);

//****************************************
//  Export User Model
//****************************************

module.exports = User