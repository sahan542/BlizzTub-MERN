const express = require('express')
const router = express.Router()

const authToken = require('../middleware/authToken')
const userSignUpController = require('../controller/user/userSignup')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const userLogout = require('../controller/user/userLogout')
const userDetailsController = require('../controller/user/userDetails')
const userSignInController = require('../controller/user/userSignin')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProductController = require('../controller/product/getCategoryProduct')


router.post("/signup",userSignUpController)
router.post("/login",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.post("/logout",userLogout)

//admin panel routes
router.get("/all-users",authToken,allUsers)
router.post("/update-user",authToken,updateUser)


//product routes
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-category",getCategoryProductController)




module.exports = router;