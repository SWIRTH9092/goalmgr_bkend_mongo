const express = require("express")

const Goal = "../../models/goal"
// const isLoggedIn = "../../utils/isLoggedIn.js"

  const goalIndex = async (req, res) => {
        try {
            // if(isLoggedIn) {
            //     const u_RootKey = req.payload.u_RootKey;
                console.log("in index route")
                const goals = await Goal.find('DT2023325183944-$2a$10$nEwYPyPJC1QNTq3qh.E11uaD.lHb7hzqdafs0hx60pLw35UH8ETlO');
                res.json(goals); 
            //}              
        }
        catch(error) {
            res.status(400).json({error});
        }
    
    };

//----------------------------
//  Export goalIndex
//----------------------------

module.exports = goalIndex