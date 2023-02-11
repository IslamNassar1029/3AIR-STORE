const express = require('express')
const mongoose = require("mongoose")
const morgan = require('morgan')
const dotenv = require('dotenv')
require("dotenv").config()
const { API_PORT } = process.env;
const portNumber = process.env.API_PORT || API_PORT;
// const portNumber = 4500;
const { dataBaseURl } = process.env;
const app = express();
const userRouter = require('./routers/user')
const productRouter = require('./routers/products')
const cors = require('cors')

const auth = require ('./middlewares/auth')

app.use(express.json())
app.use(morgan('combined'))
app.use(cors())
app.use('/product',productRouter)
app.use('/user',userRouter)


mongoose.connect(dataBaseURl,(err)=>{
    if(!err) return console.log(`Successfully connected to database`)
    console.log("database connection failed. exiting now...");
})

app.listen(portNumber,(err)=>{
    if(!err) return console.log(`server starts on port ${portNumber}`);
    console.log(err)
})