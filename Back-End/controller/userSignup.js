const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');

async function userSignUpController(req,res){
    try{
        const { email, password, name} = req.body
        if(!email){
            throw new Error("Please Provide Email")
        }
        if(!password){
            throw new Error("Please Provide Password")
        }
        if(!name){
            throw new Error("Please Provide Name")
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong")
        }
        const payload = {
            ...req.body,
            password : hashPassword
        }
        const userData = new userModel(payload)
        const saveUser = userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User Created Successfully"
        })

    }
    catch(err){
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}

    module.exports = userSignUpController