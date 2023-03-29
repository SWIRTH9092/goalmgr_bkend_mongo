//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const goalListCreate = require ("../controllers/goallist/goallistCreate")

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routers
//-------------------------------------------
router.post('/create', goalListCreate);  // get all 

//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;