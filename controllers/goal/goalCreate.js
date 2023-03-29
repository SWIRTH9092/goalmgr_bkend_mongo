const express = require("express")

const Goal = "../../models/goal"
const isLoggedIn = "../../utils/isLoggedIn.js"

  const goalCreate = async (req, res) => {
        try {
            if(isLoggedIn()) {
                const g_RootKey = req.payload.g_RootKey;
                req.body.g_U_Rootkey = g_RootKey;
                console.log(req.body)
                res.json(await Goal.create(req.body));
            }  else {
                res.status(400).json("error: not Logged in")
            }
                     
        }
        catch(error) {
            res.status(400).json({error});
        }
    
    };

//----------------------------
//  Export goalCreate
//----------------------------

module.exports = goalCreate