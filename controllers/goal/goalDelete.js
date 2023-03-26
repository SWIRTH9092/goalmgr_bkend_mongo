const express = require("express")

const Goal = "../../models/goal"
const isLoggedIn = "../../utils/isLoggedIn.js"

  const goalDelete = async (req, res) => {
        try {
            if(isLoggedIn) {
                const u_RootKey = req.payload.u_RootKey;
                req.body.u_Rootkey = u_RootKey;
                const goal = await Goal.delete({_id: req.params.id, u_RootKey});
                res.json(goal);    
            }           
        }
        catch(error) {
            res.status(400).json({error});
        }
    
    };

//----------------------------
//  Export goalDelete
//----------------------------

module.exports = goalDelete