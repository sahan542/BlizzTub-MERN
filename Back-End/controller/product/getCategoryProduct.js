const productModel = require("../../models/productModel")



const getCategoryProductController = async(req,res)=>{
    try{
        const productCategory = await productModel.distinct("category")
        console.log("category - ",productCategory)

        //array to store one product from each category
        const productByCategory = []
        for(const category of productCategory){
            const product = await productModel.findOne({ category })

            if(product){
                productByCategory.push(category)
            }
        }
        res.json({
            message: "Category product",
            data: productCategory,
            success: true,
            error: false
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


module.exports = getCategoryProductController;