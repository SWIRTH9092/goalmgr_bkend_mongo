//****************************************
//   import dependencies
//****************************************

require("dotenv").config()  //load ENV variables;
const mongoose = require("mongoose");

//****************************************
//   database connection
//****************************************

// Setup for inputs for our connection function
const  DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//****************************************
//   establish connection
//****************************************

mongoose.connect(DATABASE_URL, CONFIG);

//****************************************
//   Events for when connection 
//      opens/disconnects/errors
//****************************************

mongoose.set("strictQuery", false);
mongoose.connection

.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error));

//****************************************
//   export connection
//****************************************

module.exports = mongoose;