const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt');
const User=require('../models/user')

// get a User
const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json({error: "No such user exists"});
    }
  } catch (error) {
    res.status(500).json(error);
  }

};

// update a user
const UpdateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }

      const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body//spread the object,
      });
      if (!user) {
        return res.status(400).json({error: 'No such user'})
      }
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

  const { currentUserId, currentUserAdminStatus } = req.body;

  if (currentUserId === id || currentUserAdminStatus) {
    try {
      await User.findOneAndDelete({_id: id});
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! you can only delete your own profile");
  }
};

router.patch('/makeAdmin/:userId', (req,res)=>{
  try{
    let result=User.updateOne({_id:req.params.userId},{isAdmin:true})
    res.status(200).json(result)
  } catch (error){
    const errors= handleErrors(error)
    res.status(401).json({errors})
  }
})

router.patch('/removeAdmin/:userId', (req,res)=>{
  try{
    let result=User.updateOne({_id:req.params.userId},{isAdmin:false})
    res.status(200).json(result)
  } catch (error){
    const errors= handleErrors(error)
    res.status(401).json({errors})
  }
})

router.get('/:id', getUser)
router.patch('/:id', UpdateUser)
router.delete('/:id', DeleteUser)

module.exports = router