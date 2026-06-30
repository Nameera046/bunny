const mongoose=require('mongoose');
const URLSchema=new mongoose.Schema(
    {
        OriginalURL:{
            type: String,
            required:true
        },
        shortCode:{
            type:String,
            required:true,
            unique:true
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
        expiry:{
            type:Date,
            default:Date.now
        },
        clickCount:{
            type: Number,
            default:0
        },
        clickDetails:[
            {
                timestamp:Date,
                source:String,
                Location:String
            }
        ]
    }
);
module.exports=mongoose.model("URL",URLSchema);