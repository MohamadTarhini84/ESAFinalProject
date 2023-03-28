const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user')
const Auth=require('../middleware/requireAuth')


// get all users
const getAllUsers = async (req, res) => {

  try {
    let users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(401).json({ error })
  }
}

// get a User
const getUser = async (req, res) => {
  const id = req.params.id;

  try {

    const user = await User.findById(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "No such user exists" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a user
const UpdateUser = async (req, res) => {
  const id = req.params.id;
  const userId = req.body;

  if (id === userId) {
    try {
      const user = await User.findOneAndUpdate({ _id: id }, {
        ...req.body//spread the object,
      });
      if (!user) {
        return res.status(400).json({ error: 'No such user' })
      }
      console.log(user);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only update your own profile");
  }
};

// Delete user
const DeleteUser = async (req, res) => {
  const id = req.params.id;
  const userId = req.body;

  // if (userId === id) {
  try {
    await User.findOneAndDelete({ _id: id });
    res.status(200).json("User deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
  // } else {
  //   res.status(403).json("Access Denied! you can only delete your own profile");
  // }
};

// Make Admin
router.patch('/makeAdmin/:userId', Auth, async (req, res) => {
  try {
    const result = await User.updateOne({ _id: req.params.userId }, { isAdmin: true })
    res.status(200).json(result)
  } catch (error) {
    const errors = handleErrors(error)
    res.status(401).json({ errors })
  }
}),

// Remove Admin
router.patch('/removeAdmin/:userId',Auth, async (req, res) => {
  try {
    const result = await User.updateOne({ _id: req.params.userId }, { isAdmin: false })
    res.status(200).json(result)
  } catch (error) {
    const errors = handleErrors(error)
    res.status(401).json({ errors })
  }
})

router.get('/single',Auth, async (req,res)=>{
  try {
    if(req.user){
      res.status(200).json(req.user.isAdmin)
    } else{res.status(201).json(false)}
  } catch (error) {
    res.status(500).json(error);
  }
})


router.get('/all',Auth, getAllUsers)
router.get('/:id',Auth, getUser)
router.patch('/:id',Auth, UpdateUser)
router.delete('/:id',Auth, DeleteUser)

module.exports = router;