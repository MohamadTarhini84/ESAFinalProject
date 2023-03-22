const router = require("express").Router();
const mongoose = require("mongoose");
const upload = require('../controllers/uploadController');
const Package = require('../models/package');

function handleErrors(error) {
    let err = {}
    console.log(error)
    Object.values(error.errors).forEach(({ properties }) => {
        err[properties.path] = properties.message
    })

    return err
}

// get all packages
router.get('/all', async (req, res) => {
    try {
        let packages = await Package.find()
        res.status(200).json(packages)
    } catch (error) {
        const errors = handleErrors(error)
        res.status(401).json({ errors })
    }
})

// add new package
router.post('/new', upload.fields([{ name: 'image' }]), async (req, res) => {
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
// router.delete('/delete/:packageId', async (req, res) => {
//     try {
//         let result = await Broadcast.findOneAndDelete({ _id: req.params.packageId })
//         res.status(200)
//     } catch (error) {
//         const errors = handleErrors(error)
//         res.status(401).json({ errors })
//     }
// })

// delete package
router.delete('/delete/:packageId', async (req, res) => {
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