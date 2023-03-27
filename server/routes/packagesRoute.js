const router = require("express").Router();
const mongoose = require("mongoose");
const upload = require('../controllers/uploadController');
const Package = require('../models/package');
const Auth=require('../middleware/requireAuth')

function handleErrors(error) {
    let err = {}
    console.log(error)
    Object.values(error.errors).forEach(({ properties }) => {
        err[properties.path] = properties.message
    })

    return err
}

// get all packages
router.get('/all', Auth, async (req, res) => {
    try {
        const user=req.user
        console.log(user)
        if(user.plan){
            res.status(200).json({message:"You are already subscribed!",plan:user.plan})
        } else{
            let packages = await Package.find()
            res.status(200).json(packages)
        }
    } catch (error) {
        const errors = handleErrors(error)
        res.status(401).json({ errors })
    }
})

// add new package
router.post('/new', upload.fields([{ name: 'image' }]), Auth, async (req, res) => {
    const newPackage = new Package()
    newPackage['name'] = req.body.name
    newPackage['duration'] = parseInt(req.body.duration)
    if (req.body.cost) {
        newPackage['cost'] = parseInt(req.body.cost)
    }
    if (req.body.description) {
        newPackage['description'] = req.body.description
    }
    if (req.files.image) {
        newPackage['background'] = req.files.image[0].path
    }

    try {
        let create = await Package.create(newPackage)
        res.status(200).json(create)
    } catch (error) {
        const errors = handleErrors(error)
        res.status(401).json({ errors })
    }
})

// delete package
router.delete('/delete/:packageId', Auth, async (req, res) => {
    const user=req.user
    if(!user.isAdmin){
        return res.status(404).json({ message: 'You are not an admin!' })
    }
    try {
        let result = await Package.findOneAndDelete({ _id: req.params.packageId })
        if (!result) {
            return res.status(404).json({ message: 'Package not found' })
        }
        res.status(200).json({ message: 'Package deleted successfully' })
    } catch (error) {
        const errors = handleErrors(error)
        res.status(401).json({ errors })
    }
})


module.exports = router;