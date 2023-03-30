//----------------------------
//  Import dependencies
//----------------------------

// for MongoDB database
const GoalList = require("../../models/goallist")

const goalListIndex = async (req, res) => {
    try {
        // console.log("parm id:", req.parms.id)
        res.json(await GoalList.find());
        // res.json(await GoalList.find({ "gl_URootKey": req.params.id}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = goalListIndex