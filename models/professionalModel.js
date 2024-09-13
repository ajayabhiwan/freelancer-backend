const mongoose = require("mongoose")

const professionalSchema = new mongoose.Schema({
    register_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register"
    },
    job_title:{
        type:String,
        required:[true,"Please provide your jobtitle"],
        trim:true
    },
    website:{
        type:String,
        required:[true,"please provide your website"],
        trim:true
    },
    language:[{
       name:{
        type:String,
        required:[true,"please provide a name in language"]
       },
       level:{
        type:String,
        enum:["beginer","intermediate","expert"],
        default:"beginer",
        required:[true,"please provide a level in language"]
       } 
    }],
    skill:[{
        name:{
         type:String,
         required:[true,"please provide a name in skill"]
        },
        level:{
         type:String,
         enum:["beginer","intermediate","expert"],
         default:"beginer",
         required:[true,"please provide a level in skill"]
        } 
     }],
 
     portfolio:[{
        project:{
         type:String,
         required:[true,"please provide a name in project"]
        },
        portfolio_link:{
         type:String,
         required:[true,"please provide portfolio_link"]
        },
        description:{
            type:String,
         required:[true,"please provide  description"]
        },
        portfolio_image:[{
            type:String
        }] 
     }],
     experience:[{
        degree:{
         type:String,
         required:[true,"please provide degree"]
        },
        collage_name:{
         type:String,
         required:[true,"please provide school_name "]
        },
        start_Date:{
        type:String,
         required:[true,"please provide a start_date"]
        } ,
        end_Date:{
        type:String,
         required:[true,"please provide a end_date"]
        } 
     }],
   
  
},{timestamps:true})

module.exports = new mongoose.model("professional",professionalSchema)