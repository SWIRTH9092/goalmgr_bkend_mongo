//****************************************
//   import dependencies
//****************************************

const mongoose = require("./connection");

//****************************************
//   Define Schema, Model
//****************************************

const {Schema, model } = mongoose;

//****************************************
//   Goal Schema
//****************************************

const goalSchema = new Schema ({
    u_userid: {type: String, required: true},
    u_password: {type: String,required: true},
    u_firstName: {type: String, required: true},
    u_lastName: {type: String, required: true},
    u_email: {type: String,required: true},
    u_cellPhoneNumber: {type: String, required: true} 
});

//****************************************
//   make user Model
//****************************************

const User = model("User", userSchema);

//****************************************
//  Export User Model
//****************************************

module.exports = User