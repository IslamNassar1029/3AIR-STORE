const express = require("express")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const router = express.Router();

const UserModel = require('../models/user')

router.post('/register', async (req, res) => {

    try {
        const { firstName, lastName, email, password,role } = req.body;
        if (!(email && password && firstName && lastName)) {
            return res.status(400).send("All inputs are required");
        }
        const oldUser = await UserModel.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }
        encryptedPassword = await bcryptjs.hash(password, 10)
        console.log(firstName,lastName,email,encryptedPassword)
        const user = await UserModel.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password:encryptedPassword,
            role:role
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send(error)
        console.log(error);
    }
    
})
router.get('/', async(req,res)=>{
    try {
        const usersList =await UserModel.find({})
        res.json(usersList)
    } catch (error) {
        res.send("DataBase Error")
    }

})
router.get('/:id', async(req,res)=>{
    try {
        const user =  await  UserModel.find({ _id : req.params.id})
        res.json(user)
    } catch (error) {
        res.send("DataBase Error")
    }
    
})
router.post('/login', async (req, res) => {
    try {
        const { email, password} = req.body
        if(!(email && password)){
           return res.status(400).send("All inputs are required")
        }
        const user = await UserModel.findOne({email})
        if (user && (await bcryptjs.compare(password, user.password))){
            const token = jwt.sign(
                {user_id:user._id},
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn:"24h"
                }
            )
            user.token = token

           return res.status(200).json(user)
        }
        res.status(400).json("Invalid Credentials")
    } catch (error) {
        res.status(500).send("DataBase Error")
        console.log(error);
    }

})
router.put('/:id', async(req,res)=>{
    try {
        const updatedUser =  await  UserModel.findOneAndUpdate({ _id : req.params.id},{$set:req.body},{new:true})
        res.json(updatedUser)
    } catch (error) {
        res.send("DataBase Error")
    }
    
})
router.delete('/:id', async(req,res)=>{
    try {
        const deletedUser = await  UserModel.findOneAndDelete({ _id : req.params.id})
        res.json(deletedUser)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router