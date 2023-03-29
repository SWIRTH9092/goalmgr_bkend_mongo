//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const goalIndex = require("../controllers/goal/goalIndex")
const goalCreate = require("../controllers/goal/goalCreate")
const goalUpdate = require("../controllers/goal/goalUpate")
const goalDelete = require("../controllers/goal/goalDelete")
const goalShow = require("../controllers/goal/goalShow")

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routersgoal
//-------------------------------------------
router.get('/', goalIndex);  // get all 
router.post('/create', goalCreate);  // Create New 
router.put('/:id', goalUpdate); //Update Existing
router.delete('/:id', goalDelete)  // delete Existing
router.get('/:id', goalShow)  // Show a specific item

//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;