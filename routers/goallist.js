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
const goalListShow = require("../controllers/goallist/goallistShow")
const goalListUpdate = require("../controllers/goallist/goallistUpdate")

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
router.get('/show/:id', goalListShow); 
router.put('/update/:id', goalListUpdate); 
//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;