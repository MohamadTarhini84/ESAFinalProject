const mongoose = require('mongoose')

const PackageSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    cost:{
        type:String
    },
    background:{
        type:String
    }
})

module.exports = mongoose.model('packages',PackageSchema)