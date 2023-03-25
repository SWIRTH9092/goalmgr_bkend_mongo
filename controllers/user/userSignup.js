//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

// for MongoDB database
const User = require("../../models/user")

const userSignup = async (req, res) => {
    try {
        //  hash password
        req.body.u_Password = await bcrypt.hash(req.body.U_Password, await bcrypt.genSalt(10))

        // hash userid for root document finding
        req.body.u_RootKey = await bcrypt.hash(req.body.U_Userid, await bcrypt.genSalt(10))

        res.json (await User.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = userSignup;
