const mongoose = require("mongoose")

const jwt = require("jsonwebtoken")
const registerSchema = new mongoose.Schema({
    registration_id:{
        type:Number
    },
    mobile:{
        type:Number,
        unique:true,
        min:10,
        max:10,
        required:[true,"please provide your number"]
    },
    role:{
        type:String,
        enum:["admin","users"],
        default:"users",
        required:true
    },
    otp:{
        type:String,
       
    },
    otp_expire:{
        type:Date,
    },
    token:{
        type:String
    }
},{timestamps:true})

registerSchema.method.generateauth = async function(){
    let token = jwt.sign({_id:this._id,role:this.role},process.env.SECRET_KEY,{expiresIn:"3d"})
    this.token = token

    return token 
}


  module.exports =  new mongoose.model("register",registerSchema)


