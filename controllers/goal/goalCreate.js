const express = require("express")

const Goal = "../../models/goal"
const isLoggedIn = "../../utils/isLoggedIn.js"


const goalCreate = async (req, res) => {
    try {
        //  create Goal
        res.json (await Goal.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};

//   const goalCreate = async (req, res) => {
//         try {
//             console.count("in goal create")
//             // if(isLoggedIn()) {
//                 // const g_RootKey = req.payload.g_RootKey;
//                 // req.body.g_U_Rootkey = g_RootKey;
//                 console.log(req.body)
//                 await Goal.create(req.body);
//                 res.json ("")
//             // }  else {
//             //     res.status(400).json("error: not Logged in")
//             // }
                     
//         }
//         catch(error) {
//             console.count("in goal create")
//             res.status(400).json({error});
//         }
    
//     };

//----------------------------
//  Export goalCreate
//----------------------------

module.exports = goalCreate