const express = require('express');
const Model = require('../models/model');
const layoutmodel = require('../models/layout');
const basketmodel = require('../models/basket');
const router = express.Router();

//Post Method
router.post('/park', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get all Method
router.get('/park', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/park/:parkId', async (req, res) => {
    try {
        const data = await Model.findById(req.params.parkId);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/park/:parkId', async (req, res) => {
    try {
        const id = req.params.parkId;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/park/:parkId', async (req, res) => {
    try {
        const id = req.params.parkId;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})







//methods foorr park/parkid/layout


//Get All Method
router.get('/park/:parkId/layout', async (req, res) => {
    try {
        const parkId = req.params.parkId;
        const data = await  layoutmodel.find({"park_id" : parkId});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Post Method
router.post('/park/:parkId/layout', async (req, res) => {
    const id = req.params.parkId;
    const data = new layoutmodel({
        name: req.body.name,
        park_id: id
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/park/:parkId/layout/:layoutid', async (req, res) => {
    try {
        const id = req.params.layoutid;
        const data = await layoutmodel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Update by ID Method
router.patch('/park/:parkId/layout/:layoutid', async (req, res) => {
    try {
        const id = req.params.layoutid;
        const updatedData = req.body;
        const options = { new: true };

        const result = await layoutmodel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/park/:parkId/layout/:layoutId', async (req, res) => {
    try {
        const data = await layoutmodel.findById(req.params.layoutId);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})








//methods foorr park/parkid/layout/basket

//Get All Method   
router.get('/park/:parkId/layout/:layoutId/basket', async (req, res) => {
    try {
        const layoutId = req.params.layoutId;
        const data = await  basketmodel.find({"layout_id" : layoutId});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//Post method
router.post('/park/:parkId/layout/:layoutid/basket', async (req, res) => {
    const id = req.params.layoutid;
    const data = new basketmodel({
        name: req.body.name,
        layout_id: id
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Update by ID Method
router.patch('/park/:parkId/layout/:layoutId/basket/:basketId', async (req, res) => {
    try {
        const id = req.params.basketId;
        const updatedData = req.body;
        const options = { new: true };

        const result = await basketmodel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/park/:parkId/layout/:layoutId/basket/:basketId', async (req, res) => {
    try {
        const id = req.params.basketId;
        const data = await basketmodel.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/park/:parkId/layout/:layoutId/basket/:baskettId', async (req, res) => {
    try {
        const data = await basketmodel.findById(req.params.baskettId);
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;