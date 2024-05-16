const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


async function userSignInController(req,res){
    try{
        const { email, password} = req.body

        if(!email){
            throw new Error("Please Provide email");
        }
        if(!password){
            throw new Error("Please Provide password");
        }

        const user = await userModel.findOne({email})
        if(!user){
            throw new Error("User not Found");
        }

        const checkPassword = await bcrypt.compare(password, user.password)
        console.log("checkPassword",checkPassword);

        if(checkPassword){
            const tokenData = {
                _id : user.id,
                email : user.email

            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8});
            
            const tokenOption = {
                httpOnly : true,
                secure : true
            }

            res.cookie("token",token,tokenOption).status(200).json({
                message : "Login Successfully",
                data : token,
                success : true,
                error : false
            })

        }
        else{
            throw new Error("Please check password")
        }

    }
    catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }

}

module.exports = userSignInController