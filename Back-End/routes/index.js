const express = require('express')
const router = express.Router()
const userSignupController = require("../controller/userSignup")
const userSignInController = require('../controller/userSignin')

router.post("/signup",userSignupController)
router.post("/login",userSignInController)





module.exports = router;