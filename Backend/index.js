const express = require("express")
const jwt = require("jsonwebtoken")
const app = express()
app.use(express.json())
app.post("/",async(req,res)=>{
    try{
        const token = await jwt.sign(req.body.emailId,"jhksevrfjkwBEQWD")
        res.status(201).json({
            status:"success",
            data:token
        })

    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message

        })
    }
})
app.listen(5000,()=>{
    console.log("server created successful")
})