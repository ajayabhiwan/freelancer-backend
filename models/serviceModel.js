const mongoose = require("mongoose")

const serviceSchema = new mongoose.Schema({
    register_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register"
    },
    service_name:{
        type:String,
        required:[true,"service_name required"]
    },
    max_price:{
        type:Number,
        required:[true,"max_price required"]
    },
    min_price:{
        type:Number,
        required:[true,"min_price required"]
    }
    ,
    description:{
        type:String,
        required:[true,"description required"]
    }
},{timestamps:true})


module.exports = new mongoose.model("servcie",serviceSchema)