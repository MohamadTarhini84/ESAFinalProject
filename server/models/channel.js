const mongoose=require('mongoose')
const broadcastSchema=require('./broadcast')

const ChannelSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    broadcasts:[{
        type:broadcastSchema,
        default:[]
    }]
})