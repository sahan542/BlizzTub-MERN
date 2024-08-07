const express = require('express')
const router = express.Router()
const userSignupController = require("../controller/userSignup")
const userSignInController = require('../controller/userSignin')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/userLogout')
const allUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateUser')

router.post("/signup",userSignupController)
router.post("/login",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.post("/logout",userLogout)

//admin panel routes
router.get("/all-users",authToken,allUsers)
router.post("/update-user",authToken,updateUser)




module.exports = router;