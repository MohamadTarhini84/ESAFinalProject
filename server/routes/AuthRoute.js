const express = require('express')
const jwt = require('jsonwebtoken')
const User=require('../models/user')

const router = express.Router()

// router.post('/signup', signupUser)
// router.post('/login', loginUser)

//Create static method instead of the ones already present

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const signupUser = async (req, res) => {
  const {email,firstname,lastname, password} = req.body

  try {
    const user = await User.signup(email,firstname,lastname, password)

    const token = createToken(user._id)

    res.status(200).json({email,firstname,lastname, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


router.post('/googleLogin', async (req, res) => {
  try{
      const {email, firstName, lastName} = req.body
      let userExist = await User.find({email})

      if(!userExist){
        const user = await User.signup(email,firstName,lastName, process.env.SECRET)
        const token = createToken(user._id)
        res.status(200).json({email,firstName,lastName, token})
      } else{
        const user = await User.login(email, process.env.SECRET)
        const token = createToken(user._id)
        res.status(200).json({email, token})
      }
  }
  catch(err){
      console.log(err.message)
      res.status(400).json({error:err.message})
  }
})

module.exports = router;

