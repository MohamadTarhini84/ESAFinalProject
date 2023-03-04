const mongoose=require('mongoose')

const broadcastSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    }
})

module.exports=broadcastSchema