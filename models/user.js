//****************************************
//   import dependencies
//****************************************

const mongoose = require("./connection");

//****************************************
//   Define User Model
//****************************************

const {Schema, model } = mongoose;

//****************************************
//   User Schema
//****************************************

const userSchema = new Schema ({
    userid: {type: String},
    password: {type: String},
    FirstName: {type: String},
    LastName: {type: String},
    Email: {type: String},
    CellPhoneNumber: {type: String} 
});

//****************************************
//   make user Model
//****************************************

const User = model("User", userSchema);

//****************************************
//  Export User Model
//****************************************

module.exports = User