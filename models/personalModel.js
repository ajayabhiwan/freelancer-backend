const mongoose = require("mongoose")
const validator = require("validator")
const personalSchema = new mongoose.Schema({
    register_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register"
    },
    name:{
        type:String,
        required:[true,"Please provide your name"],
        trim:true
    },
    gender:{
        type:String,
        required:[true,"please provide your gender"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"please provide your email"],
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    dob:{
        type:String,
        required:[true,"please provide your dob"]
    },
    personal_image:{
        type:String,
        required:[true,"please provide personal_image"]
    },
    city:{
        type:String,
        required:[true,"please provide your city"]
    },
    state:{
        type:String,
        required:[true,"please provide your state"]
    },
  
},{timestamps:true})

module.exports = new mongoose.model("personal",personalSchema)