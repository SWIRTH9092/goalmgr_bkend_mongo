const express = require("express")

const Goal = "../../models/goal"
const isLoggedIn = "../../utils/isLoggedIn.js"

  const goalCreate = async (req, res) => {
        try {
            const u_RootKey = req.payload.u_RootKey;
            req.body.u_Rootkey = u_RootKey;
            const goal = await Goal.create(req.body);
            res.json(goal);               
        }
        catch(error) {
            res.status(400).json({error});
        }
    
    };

//----------------------------
//  Export goalCreate
//----------------------------

module.exports = goalCreate