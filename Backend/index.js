const express = require("express")
const app = express()
const mongoose = require("mongoose")
const data = require("./data")
require("./db/connection")
const City = require("./models/cities")
app.use(express.json())
app.post("/cities",async(req,res)=>{
    try{
        const result =await City.insertMany(data)
        console.log(result)
        res.status(201).send(result)
    }catch(e){
        res.status(400).send(e)
    }
})
app.listen(3000,()=>{
    console.log("listening to the port")
})