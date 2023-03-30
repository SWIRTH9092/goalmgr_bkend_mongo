### Capstone Project 

##### Links
- Backend
    - GitHub: https://github.com/SWIRTH9092/goalmgr_bkend_mongo
    - Render: https://sw-goalmgr-bkend.onrender.com
- Frontend
    - GitHub: https://github.com/SWIRTH9092/goalmgr_frend
    - Render: https://sw-goalmgr-client.onrender.com

##### Dependencies
- Node
- Express
    - dotenv
    - Mongoose
    - Express
    - Cors
    - Morgan

##### Goal Manager Mongoose Database Model 
-   Database names:  
    - Users:  Stores User information
        - Goallists: List of Goals
            - Goalsteps:  List of Steps for a Goal
                - Goaltrackings: tracking progress for a Goal Step 
-   Schemas:
    <img src="https://i.imgur.com/q4AT4nX.jpg" alt="Goal Manager Database Schema" title="DatabaseSchema" width="750%"/>

#### Routes 
- user routes

| Routes | Method | EndPoints | Expected Result |
|--------|--------|-----------|-----------------|
| Logout | POST | /auth/logout| Logs out of app |
| Create | POST | /auth/create | Creates a user |
| Login  | POST | /auth/login | Logs into app
| Update** | PUT  | /auth/update/id | Updates Existing User |
| Show** | GET | /auth/show/id | get user info for editing  |
| Delete** | DELETE | /auth/delete/id | Deletes User and their goals. |

** future router enchancements

- goal list routes

| Routes | Method | EndPoints | Expected Result |
|--------|--------|-----------|-----------------|
|Create | POST | /goallist/create | Creates a New Goal |
| Index | GET| /goallist/index/id | Gets all goals for a user  |
| Delete | DELETE | /goallist/delete/id | Deletes a goal and its children |
| Show | GET | /goallist/show/id | Gets 1 goal to update
| Update | PUT | /goallist/update/id | Updates Existing Entry |


- goal step routes

| Routes | Method | EndPoints | Expected Result |
|--------|--------|-----------|-----------------|
|Create | POST | /goalstep/create | Creates a new step for a goal|
| Index | GET| /goalstep/index/id | gets all steps for a goal  |
| Delete | DELETE | /goalstep/delete/id | Deletes a step and its children |
| Show | GET | /goalstep/show/id | Gets 1 goal step to update |
| Update | PUT | /goalstep/update/id | Updates Existing Entry |


- goal tracking routes

| Routes | Method | EndPoints | Expected Result |
|--------|--------|-----------|-----------------|
| Create** | POST | /goaltracking/create | Creates a new tracking entry  |
| Index** | GET| /goaltracking/index/id | gets all tracking for a step |
| Delete** | DELETE | /goaltracking/delete/id | Deletes a tracking entry
| Show** | GET | /goaltracking/show/id | Gets 1 tracking entry
| Update** | PUT | /goaltracking/update/id | Updates Existing Entry |

** future router enchancements

** future enchancement 
- user
    - user delete
    - user update information
    - user authication using cookies

- goal tracking
    - track progress for a step