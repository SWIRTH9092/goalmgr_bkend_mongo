const express = require("express")

const Goal = "../../models/goal"
const isLoggedIn = "../../utils/isLoggedIn.js"

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