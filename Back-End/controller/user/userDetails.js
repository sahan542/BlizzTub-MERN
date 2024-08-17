const userModel = require("../../models/userModel")

async function userDetailsController(req,res){
    try{
        console.log("userId",req.user._id)
        const user = await userModel.findById(req.user._id);
        console.log("user",user)
        
        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "user details"
        })


    }
    catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

}

module.exports = userDetailsController;