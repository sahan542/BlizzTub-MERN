const userModel = require("../models/userModel")

async function allUsers(req,res){
    try{
        const allUsers = await userModel.find();
        const useremails = allUsers.map(user =>user.email)
        res.json({
            message: "All User Details",
            data: allUsers,
            success: true,
            error: false
        })
        console.log("userId all users",useremails)

    }
    catch(error){
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}


module.exports = allUsers