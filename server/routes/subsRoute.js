require('dotenv').config()
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
const User=require('../models/user')
const Package=require('../models/package')
const Stripe=require('stripe').default
const stripe = new Stripe(process.env.STRIPE_KEY)
const mongoose=require('mongoose')

function handleErrors(error){
    let err={}
    console.log(error)
    Object.values(error.errors).forEach(({properties})=>{
        err[properties.path]=properties.message
    })

    return err
}

// router.use((req, res, next) => {
//     if (req.originalUrl === '/webhook') {
//       next();
//     } else {
//       bodyParser.json()(req, res, next);
//     }
//   });

router.get('/subscribe/:packageId', async (req, res)=>{
    try{
        let packageDetails=await Package.findOne({_id:mongoose.Types.ObjectId(req.params.packageId)})
        console.log(packageDetails)
        let session=await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:'payment',
            line_items:[{
                price_data:{
                    currency:'usd',
                    product_data:{
                        name:packageDetails.name
                    },
                    // unit_amount:11111,
                    unit_amount:packageDetails.cost,
                },
                quantity:1,
            }],
            metadata:{hello:"Hello World!"},
            success_url:"http://localhost:5173/subscribe",
            cancel_url:"http://localhost:5173/subscribe"
        })
        res.status(200).json(session.url)
    } catch (error){
        const errors= handleErrors(error)
        res.status(401).json({errors})
    }
})

router.post('/webhook', express.raw({type: 'application/json'}), async (req,res)=>{
    const sig=req.headers['stripe-signature']
    let event;
    try{
        console.log(req.body)
        // event=stripe.webhooks.constructEvent(req.body,sig,process.env.WEBHOOK_SECRET)
    } catch (error){
        console.log(error.raw.message)
        res.status(400).end()
        return;
    }
    // console.log(event.type)
    // const intent=event.data.object

    // switch(event.type){
    //     case 'payment_intent.succeeded':
    //         console.log('success')
    //         const result=User.findOneAndUpdate({_id:})
    //         break;
    //     case 'payment_intent.payment_failed':
    //         break;
    // }
})

module.exports=router