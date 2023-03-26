//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const userLogout = require ("../controllers/user/userLogout")
const userSignup = require("../controllers/user/userSignup")
const userLogin = require("../controllers/user/userLogin")
const userDelete = require("../controllers/user/userDelete")

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routers
//-------------------------------------------
router.post('/logout', userLogout);  // get all 
router.post('/signup', userSignup);  // Create New 
router.post('/login', userLogin); //Update Existing
router.delete('/delete/:id', userDelete)  // delete Existing

//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;