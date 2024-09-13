const mongoose = require("mongoose")

const coverImage = new mongoose.Schema({
    register_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register"
    },
    image:[{
        type:String
    }]
},{timestamps:true})

module.exports = new mongoose.model("cover",coverImage)