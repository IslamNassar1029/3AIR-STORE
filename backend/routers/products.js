const express = require ("express")
const router = express.Router();
const productModel = require('../models/product')
router.get('/', async(req,res)=>{
    try {
        const productsList =await productModel.find({})
        res.json(productsList)
    } catch (error) {
        res.send(error)
    }

})
router.get('/:id', async(req,res)=>{
    try {
        const product=  await productModel.find({ _id : req.params.id})
        res.json(product)
    } catch (error) {
        res.send("DataBase Error")
    }
    
})
router.post('/', async(req,res)=>{
    const product = new  productModel (req.body)
    try {
        const savedProduct = await product.save()
        console.log(savedProduct)
        res.json(savedProduct)
    } catch (error) {
        res.send("DataBase Error")
    }

})
router.put('/:id', async(req,res)=>{
    try {
        const updatedProduct =  await  productModel.findOneAndUpdate({ _id : req.params.id},{$set:req.body},{new:true})
        res.json(updatedProduct)
    } catch (error) {
        res.send("DataBase Error")
    }
    
})
router.delete('/:id', async(req,res)=>{
    try {
        const deletedProduct = await  productModel.findOneAndDelete({ _id : req.params.id})
        res.json(deletedProduct)
    } catch (error) {
        res.send("DataBase Error")
    }
})





module.exports=router