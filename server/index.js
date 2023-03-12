const express=require('express');
const authRoutes=require('./routes/AuthRoute')
const userRoutes=require('./routes/UserRoute')
const subRoute=require('./routes/subsRoute')
const connect=require('./config/db')
// const cors=require('cors')

const app=express()//creates an express app
    
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('*/assets',express.static(__dirname+'/assets'))
// app.use(cors({
//     origin:'http://localhost:300'
// }))

// app.use((req,res,next)=>{
    //     console.log(req.path,req.method)
    //     next()
    // })
    
    //routes
    app.use(express.urlencoded({extended:true}))
    app.use('/api/auth', authRoutes)
    app.use('/api/user', userRoutes)
    app.use('/api/subscribe', subRoute)
    
    // connect to db
    
    connect(app)
