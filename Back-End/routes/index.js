const express = require('express')
const router = express.Router()
const userSignupController = require("../controller/userSignup")
const userSignInController = require('../controller/userSignin')
const userDetailsController = require('../controller/userDetails')
const authToken = require('../middleware/authToken')

router.post("/signup",userSignupController)
router.post("/login",userSignInController)
router.get("/user-details",authToken,userDetailsController)





module.exports = router;