//****************************************
//   Import our dependencies
//****************************************

// need to make the router
const express = require('express')

//****************************************
//   controller dependencies
//****************************************
const generalGet = require("../controllers/general/generalGet")

//****************************************
//   create route
//****************************************

const router = express.Router();

//****************************************
//   routers
//****************************************

router.get("/", generalGet)

//****************************************
//   Export the Router
//****************************************

module.exports = router;