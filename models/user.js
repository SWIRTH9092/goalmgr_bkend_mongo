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
    userid: {type: String},
    password: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    cellPhoneNumber: {type: String} 
});

//****************************************
//   make user Model
//****************************************

const User = model("User", userSchema);

//****************************************
//  Export User Model
//****************************************

module.exports = User