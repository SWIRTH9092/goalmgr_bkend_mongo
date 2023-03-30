//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const goalTrackingCreate = require ("../controllers/goaltracking/goaltrackingCreate")
const goalTrackingIndex = require ("../controllers/goaltracking/goaltrackingIndex")
const goalTrackingDelete = require("../controllers/goaltracking/goaltrackingDelete")
const goalTrackingShow = require("../controllers/goaltracking/goaltrackingShow")
const goalTrackingUpdate = require("../controllers/goaltracking/goaltrackingUpdate")

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routers
//-------------------------------------------
router.post('/create', goalTrackingCreate);  // create a goal
router.get('/index/:id', goalTrackingIndex);  // get all goals for userid
router.delete('/delete/:id', goalTrackingDelete); 
router.get('/show/:id', goalTrackingShow); 
router.put('/update/:id', goalTrackingUpdate); 
//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;