//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const goalListCreate = require ("../controllers/goallist/goallistCreate")
const goalListIndex = require ("../controllers/goallist/goallistIndex")
const goalListDelete = require("../controllers/goallist/goallistDelete")

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routers
//-------------------------------------------
router.post('/create', goalListCreate);  // create a goal
router.get('/index/:id', goalListIndex);  // get all goals for userid
router.delete('/delete/:id', goalListDelete); 

//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;