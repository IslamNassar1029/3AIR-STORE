const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title:{type: String},
    Quantity:{type: Number},
    price: {type: Number},
    imgScr:{type:String},
    category:{type:String},
    brand:{type: String}
})

const ProductModel = mongoose.model("Product", productSchema)


module.exports = ProductModel 