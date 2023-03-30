//----------------------------
//  Import dependencies
//----------------------------
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
require("dotenv").config();
const User = require("../../models/user")

//login Post

const userLogin = async (req, res) => {
    try {
        const { u_Userid, u_Password } = req.body;
        //get the user
        const user = await User.findOne({ u_Userid })
        if (user) {
            const passwordCheck = await bcrypt.compare(u_Password, user.u_Password)
            if (passwordCheck) {
                const u_RootKey = user._id
                res.json({u_RootKey, status: "Logged In"})
            } else {
                res.status(400).json({error: "Password does not match"})               
            }
            
        }else {
            res.status(400).json({error: "User does not exist"})
        }

        // auth security
        // if (user) {
        //     const passwordCheck = await bcrypt.compare(u_Password, user.u_Password)
        //     if (passwordCheck) {
        //         const u_RootKey = user.u_RootKey
        //         const payload = { u_Userid, u_RootKey}
        //         const token = await jwt.sign(payload,  process.env.SECRET_KEY)     //login Post
        //         res
        //             // .cookie("token", token, { httpOnly: true })
        //             .cookie("token", token)
        //             .json({payload, u_RootKey, status: "Logged In"})
        //     } else {
        //         res.status(400).json({error: "Password does not match"})               
        //     }
            
        // }else {
        //     res.status(400).json({error: "User does not exist"})
        // }
    } catch(error) {
        res.status(400)
    }

};

//----------------------------
//  Export controller function
//----------------------------

module.exports = userLogin
