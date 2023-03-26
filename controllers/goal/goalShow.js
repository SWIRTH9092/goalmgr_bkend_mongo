const express = require("express")

const Goal = "../../models/goal"
const isLoggedIn = "../../utils/isLoggedIn.js"

  const goalShow = async (req, res) => {
        try {
            if(isLoggedIn) {
                const u_RootKey = req.payload.u_RootKey;
                const goal = await Goal.find({ u_RootKey, _id:req.params.id  });
                res.json(goal);               
            } 
        }
        catch(error) {
            res.status(400).json({error});
        }
    
    };

//----------------------------
//  Export goalIndex
//----------------------------

module.exports = goalShow