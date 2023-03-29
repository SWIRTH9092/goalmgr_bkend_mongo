//****************************************
//   import dependencies
//****************************************

require('dotenv').config();
const mongoose = require('./connection');
const User = require('./user')
const Goal = require('./goal')

//****************************************
//   seed user table to test connection
//****************************************

mongoose.connection.on('open', () => {
    // define user data to put in the table
    const startingUser = [
        {
            "u_Userid": "Minnie1940",
            "u_RootKey": "DT2023325183944-$2a$10$nEwYPyPJC1QNTq3qh.E11uaD.lHb7hzqdafs0hx60pLw35UH8ETlO",
            "u_Password": "MickeyMouse",
            "u_FirstName": "Minnie",
            "u_LastName": "Mouse",
            "u_Email": "Minnie@disney.org",
            "u_CellPhoneNumber": "1112223333"
        },
        {
            "u_Userid": "Mickey1935",
            "u_Password": "MinnieMouse",
            "u_FirstName": "Mickey",
            "u_RootKey": "DT2023325184246-$2a$10$MAfL8fvCgmrRTpsxkIEbaOB9gEJikbHxxn3/rBHR5WCzB3NbsjZSyUH8ETlO",
            "u_LastName": "Mouse",
            "u_Email": "Mickey@disney.org",
            "u_CellPhoneNumber": "7778889999"
        }
        // { 
        //     u_Userid: "minnie50",
        //     u_Password: "123456789",
        //     u_FirstName: "Minnie",
        //     u_LastName: "Mouse",
        //     u_Email: "minnie@disney.org",
        //     u_CellPhoneNumber: "1112223333"
        // }
    ]

    const startingGoal = [
        {
            g_URootKey: "DT2023329134258-$2a$10$C5f4mgAWiG7Rwx.fW3JGLOK.4AkP3rf6jLeXjJHEFZI7oo5Ld54Tm", 
            g_Name: "Shine Shoes",
            g_Status: "Not Started",
            g_description:  "Blah, blah ...."
        }
    ]

    // for first time if no data
        Goal.create(startingGoal)
        .then (result => {
            mongoose.connection.close();
        })
        .catch (error => {
            console.log (`Mongodb create error: ${error}`)
            mongoose.connection.close();
        })
    
    //    User.create(startingUser)
    //     .then (result => {
    //         mongoose.connection.close();
    //     })
    //     .catch (error => {
    //         console.log (`Mongodb create error: ${error}`)
    //         mongoose.connection.close();
    //     })


        // })
    //  if not the first time, delete old data
        // User.deleteMany({} => {
        //     //  create new user item
        //     User.create(startingUser => {
        //         mongoose.connection.close();
        //     })
        // })

})