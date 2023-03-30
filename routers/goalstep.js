//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const goalStepCreate = require ("../controllers/goalstep/goalstepCreate")
const goalStepIndex = require ("../controllers/goalstep/goalstepIndex")
const goalStepDelete = require("../controllers/goalstep/goalstepDelete")
const goalStepShow = require("../controllers/goalstep/goalstepShow")
const goalStepUpdate = require("../controllers/goalstep/goalstepUpdate")

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routers
//-------------------------------------------
router.post('/create', goalStepCreate);  // create a goal
router.get('/index/:id', goalStepIndex);  // get all goals for userid
router.delete('/delete/:id', goalStepDelete); 
router.get('/show/:id', goalStepShow); 
router.put('/update/:id', goalStepUpdate); 
//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;