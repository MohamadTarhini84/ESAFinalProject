const express = require('express')
const jwt = require('jsonwebtoken')
const User=require('../models/user')
const bcrypt = require('bcrypt');

const router = express.Router()

router.post('/signup', signupUser)
router.post('/login', loginUser)

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
  const {email,username,firstname,lastname, password} = req.body

  try {
    const user = await User.signup(email,username,firstname,lastname, password)

    const token = createToken(user._id)

    res.status(200).json({email,username,firstname,lastname, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = router