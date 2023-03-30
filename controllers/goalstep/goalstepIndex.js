//----------------------------
//  Import dependencies
//----------------------------

// for MongoDB database
const GoalStep = require("../../models/goalstep")

const goalStepIndex = async (req, res) => {
    try {
        res.json(await GoalList.find({ "gs_GLRootKey": req.params.id}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

//----------------------------
//  Export controller function
//----------------------------

module.exports = goalStepIndex