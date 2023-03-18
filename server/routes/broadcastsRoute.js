const router=require("express").Router()
const mongoose=require("mongoose")
const upload=require('../controllers/uploadController')
const Broadcast=require('../models/broadcast')

function handleErrors(error){
    let err={}
    console.log(error)
    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })

    return err
}

// get all broadcasts
router.get('/all',async (req,res)=>{
    const page=req.query.page || 0
    const broadcastsPerPage=30

    try{
        let broadcasts=await Broadcast.find().skip(page*broadcastsPerPage).limit(broadcastsPerPage)
        res.status(200).json(broadcasts)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

// get one broadcast
router.get('/single/:broadcastId',async (req,res)=>{
    try{
        let broadcast=await Broadcast.findOne({_id:req.params.broadcastId})
        res.status(200).json(broadcast)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

// add new broadcast
router.post('/new', async (req,res)=>{
    const newBroadcast=new Broadcast({
        title:req.body.title,
        category:req.body.category,
        path:req.body.path,
        channelName: req.body.channelName,
        channel: req.body.channel
    })
    
    try{
        let create=await Broadcast.create(newBroadcast)
        res.status(200).json(create)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

// edit broadcast
router.patch('/edit/:broadcastId', async (req,res)=>{
    let broadcast={}

    if(req.body.title){
        broadcast['title']=req.body.title
    }
    if(req.body.category){
        broadcast['category']=req.body.category
    }
    try{
        const oldBroadcast=await Broadcast.findOneAndUpdate({_id:req.params.broadcastId},broadcast)
        res.status(200)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

// search for broadcast
router.get('/search', async (req, res)=>{
    let match=new RegExp(req.query.value, 'i')

    const page=req.query.page || 0
    const broadcastsPerPage=30
    
    try{
        let results=await Broadcast.aggregate([{$match:{$or:[{title:match},{category:match},{channelName:match}]}}]).skip(page*broadcastsPerPage).limit(broadcastsPerPage)
        res.status(200).json(results)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

// delete broadcast
router.delete('/delete/:broadcastId', async (req,res)=>{
    try{
        let result=await Broadcast.findOneAndDelete({_id:req.params.broadcastId})
        res.status(200)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

module.exports=router;