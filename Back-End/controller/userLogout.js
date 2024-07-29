async function userLogout(req,res){
    try{
        res.clearCookie("token")
        console.log("in the try block of logout")

        res.json({
            message : "Logged out successfully!",
            error : false,
            success : true,
            data : []
        })

    }
    catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false,
        })
    }

}

module.exports = userLogout;