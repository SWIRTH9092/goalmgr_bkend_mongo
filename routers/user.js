//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const userIndex = require ("../controllers/user/userIndex")
const userSignup = require("../controllers/user/userSignup")
const userUpdate = require("../controllers/user/userUpdate")
const userDelete = require("../controllers/user/userDelete")
const userShow = require("../controllers/user/userShow")

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routers
//-------------------------------------------
router.get('/', userIndex);  // get all 
router.post('/signup', userSignup);  // Create New 
router.put('/:id', userUpdate); //Update Existing
router.delete('/:id', userDelete)  // delete Existing
router.get('/:id', userShow)  // Show a specific item

//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;