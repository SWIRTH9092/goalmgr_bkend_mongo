const express = require("express")

const Goal = "../../models/goal"
const isLoggedIn = "../../utils/isLoggedIn.js"

  const goalUpdate = async (req, res) => {
        try {
            if(isLoggedIn) {
                const u_RootKey = req.payload.u_RootKey;
                req.body.u_RootKey = u_RootKey;
                const goal = await Note.findByIdAndUpdate(req.params.id, req.body)
                res.json(goal);               
            } 
        }
        catch(error) {
            res.status(400).json({error});
        }
    
    };

//----------------------------
//  Export goalUpdate
//----------------------------

module.exports = goalUpdate