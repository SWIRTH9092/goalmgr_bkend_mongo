//****************************************
//   import dependencies
//****************************************

const mongoose = require("./connection");

//****************************************
//   Define Schema, Model
//****************************************

const { Schema, model } = mongoose;

//****************************************
//   User Schema
//****************************************

const userSchema = new Schema ({
    u_Userid: {type: String, required: true, unique: true },
    u_Password: {type: String,required: true},
    u_RootKey: {type: String, required: true, unique: true },
    u_FirstName: {type: String, required: true},
    u_LastName: {type: String, required: true},
    u_Email: {type: String,required: true, unique: true},
    u_CellPhoneNumber: {type: String, required: true}
}, {timestamps: true});

//****************************************
//   make user Model
//****************************************

const User = model("User", userSchema);

//****************************************
//  Export User Model
//****************************************

module.exports = User