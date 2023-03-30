//****************************************
//   import dependencies
//****************************************

require('dotenv').config();
const mongoose = require('./connection');
const User = require('./user')
const GoalList = require('./goallist')


//****************************************
//   seed user table to test connection
//****************************************

mongoose.connection.on('open', () => {
    // define user data to put in the table
    const startingUser = [
            {
                 "u_Userid": "Minnie1940",
                 "u_Password": "MickeyMouse",
                 "u_FirstName": "Minnie",
                 "u_LastName": "Mouse",
                 "u_Email": "Minnie@disney.org",
                 "u_CellPhoneNumber": "1112223333",
                 "_id": "6424cd607fad3e5b641f975e"
             },
             {
                 "u_Userid": "Mickey1935",
                 "u_Password": "MinnieMouse",
                 "u_FirstName": "Mickey",
                 "u_LastName": "Mouse",
                 "u_Email": "Mickey@disney.org",
                 "u_CellPhoneNumber": "7778889999",
                 "_id": "6424cc2d7fad3e5b641f9756"
             },
             {
                 "u_Userid": "DaffyDuck",
                 "u_Password": "Quack123",
                 "u_FirstName": "Daffy",
                 "u_LastName": "Duck",
                 "u_Email": "Daffy@disney.org",
                 "u_CellPhoneNumber": "2223334444",
                 "_id": "6424cd8f7fad3e5b641f9762"
             }
         ]
     
    const startingGoallist = [
            {
                "gl_URootKey": "6424cd607fad3e5b641f975e", 
                "gl_Name": "Shine Shoes",
                "gl_Stat": "Not Started",
                "gl_Description":  "Blah, blah ....",
                "gl_SortOrder": "99"
                         }
    ]
       User.create(startingUser)
        .then (result => {
            mongoose.connection.close();
        })
        .catch (error => {
            console.log (`Mongodb create error: ${error}`)
            mongoose.connection.close();
        });

        GoalList.create(startingGoallist)
        .then (result => {
            mongoose.connection.close();
        })
        .catch (error => {
            console.log (`Mongodb create error: ${error}`)
            mongoose.connection.close();
        })






        // })
    //  if not the first time, delete old data
        // User.deleteMany({} => {
        //     //  create new user item
        //     User.create(startingUser => {
        //         mongoose.connection.close();
        //     })
        // })

})