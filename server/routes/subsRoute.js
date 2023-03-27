require('dotenv').config()
const express = require('express')
const router = express.Router()
const Package=require('../models/package')
const User=require('../models/user')
const Stripe=require('stripe').default
const stripe = new Stripe(process.env.STRIPE_KEY)
const mongoose=require('mongoose')
const Auth=require('../middleware/requireAuth')

function handleErrors(error){
    let err={}
    console.log(error)
    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })

    return err
}


router.get('/subscribe/:packageId', Auth, async (req, res)=>{
    try{
        let packageDetails=await Package.findOne({_id:mongoose.Types.ObjectId(req.params.packageId)})
        
        let session=await stripe.checkout.sessions.create({
            metadata:{
                userId:req.user._id.toHexString(),
                packageId:packageDetails._id.toHexString(),
                cost:packageDetails.cost,
                duration:packageDetails.duration
            },
            payment_method_types:['card'],
            mode:'payment',
            line_items:[{
                price_data:{
                    currency:'usd',
                    product_data:{
                        name:packageDetails.name
                    },
                    unit_amount:packageDetails.cost,
                },
                quantity:1,
            }],
            success_url:"http://localhost:5173/subscribe",
            cancel_url:"http://localhost:5173/subscribe"
        })
        res.status(200).json(session.url)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

router.post('/webhook', async (req,res)=>{
    try{
        console.log(req.body.data.object.metadata)
        let data=req.body.data.object.metadata
        let result=await User.findOneAndUpdate({_id:data.userId},
            {$addToSet: 
                { plan: { 
                    package:data.packageId, 
                    cost:data.cost,
                    expireAt:new Date(new Date().getTime()+parseInt(data.duration))
                } 
            }})
        res.status(200).json(result)
    } catch (error){
        console.log(error)
        res.status(400).end()
        return;
    }
})

module.exports=router