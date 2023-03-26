const express = require("express")

import Goal from "../models/goal.js"
import isLoggedIn from "../utils/isLoggedIn.js"

  const goalIndex = async (req, res) => {
        try {
            if(isLoggedIn) {
                const u_RootKey = req.payload.u_RootKey;
                const goals = await Goal.find({ u_RootKey });
                res.json(goals);               
            } 
        }
        catch(error) {
            res.status(400).json({error});
        }
    
    };

//----------------------------
//  Export goalIndex
//----------------------------

module.exports = goalIndex