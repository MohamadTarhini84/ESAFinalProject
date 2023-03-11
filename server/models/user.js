const mongoose = require('mongoose')
const bcrypt = require('bcrypt')//hashing function
const validator = require('validator')
const subSchema=require('./subscription')

const UserSchema = mongoose.Schema({
      username: {
          type: String,
          required: true,
          unique:true
      },
      firstName:{
        type:String,
        required:true
      },
      lastName:{
        type:String,
        required:true
      },
      email:{
          type:String,
          required: true,
          unique:true
      },
      password : {
          type: String,
          required: true
      },
      plan:{
        type:subSchema
      },
      isAdmin : {
          type: Boolean,
          default: false,
      }
    })

UserSchema.statics.signup = async function(email,firstname,lastname, password) {//needs to be a regular function to use this.

    // validation
    if (!email || !password || !firstname|| !lastname) {
      throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
      throw Error('Email not valid')
    }
  
    const exists = await this.findOne({ email })
  
    if (exists) {
      throw Error('Email already in use')
    } 
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const user = await this.create({ emailfirstname,lastname, password: hash })
  
    return user
  }

  // static login method
UserSchema.statics.login = async function(email, password) {

    if (!email || !password) {
      throw Error('All fields must be filled')
    }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('Incorrect email')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  }  

module.exports = mongoose.model("User", UserSchema);
