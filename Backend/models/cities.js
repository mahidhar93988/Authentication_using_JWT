const mongoose = require("mongoose")
const validator = require("validator")
const citiesSchema = mongoose.Schema({
    id:{
        type:Number,
        // required:true,
        // unique:true
    },
    name:{
        type:String,
        // require:true,
    },
    state:{
        type:String,
        // require:true
    }
})


const City = new mongoose.model("City",citiesSchema)
module.exports = City