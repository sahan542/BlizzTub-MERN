const productModel = require("../models/productModel")
const uploadProductPermission = require("../helpers/permission");

async function updateProductController(req,res){
    try{
        if(!uploadProductPermission(req.userId)){
            throw new Error("Permission denied")
        }

        const {_id,...resBody} = req.body
        const updateProduct = await productModel.findByIdAndUpdate(_id,resBody)

        res.json({
            message : "Product update Successfuly",
            error : false,
            success : true,
            data : updateProduct
        })

    }
    catch(error){
        res.status(400).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}



module.exports = updateProductController;