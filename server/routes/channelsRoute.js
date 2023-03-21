const router=require("express").Router()
const mongoose=require("mongoose");
const upload=require('../controllers/uploadController');
const Channel=require('../models/channel');
const Broadcast=require('../models/broadcast');

function handleErrors(error){
    let err={}
    console.log(error)
    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })

    return err
}

// get all channels
router.get('/all',async (req, res)=>{
    try{
        let channels=await Channel.find()
        res.status(200).json(channels)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

// get one channel
router.get('/single/:channelId',async (req,res)=>{
    try{
        let channel=await Channel.findOne({_id:req.params.channelId})
        res.status(200).json(channel)
    } catch (error){
        // const errors= handleErrors(error)
        res.status(401).json({error})
        // console.log(error)
    }
})

// upload channel logo
router.post('/new', upload.fields([{name:'image'}]), async (req, res)=>{
    try{
        const newChannel = new Channel({
            name:req.body.name,
            logo:req.files.image[0].path
        })

        let channel=await Channel.create(newChannel)
        res.status(200).json(channel)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

// delete channel
router.delete('/delete/:channelId', async (req, res)=>{
    try{
        let result=await Channel.findOneAndDelete({_id:req.params.channelId})
        let cascadeDelete=await Broadcast.deleteMany({channel:result._id})
        res.status(200)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

module.exports=router;