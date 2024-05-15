const express = require('express')
const router = express.Router()
const userSignupController = require("../controller/userSignup")

router.post("/signup",userSignupController)





module.exports = router;