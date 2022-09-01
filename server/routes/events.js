const express = require('express')
const router = express.Router();
const Event = require("../models/Events");
const { createError } = require('../utils/error');

//CREATE NEW EVENT
router.post('/', async (req, res) => {
    const newEvent = new Event(req.body)
    console.log(newEvent)
    try {
        const savedEvent = await newEvent.save()
        res.status(200).json(savedEvent)
        console.log("Event!")
        res.send("h")
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE EVENT
router.put('/:id', async (req, res) => {
 try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!event){
            return res.status(404).send();
        }
        res.status(200).json(event)
        console.log("Event updated!")
        res.send("event updated")
    } catch (err) {
        res.status(500).json(err)
    }
})


//DELETE EVENT
router.delete('/:id', async (req, res) => {

    try {
        const event = await Event.findByIdAndDelete(req.params.id)
        if(!event) {
            return res.status(404).send()
        }
        res.status(200).json(event)
        console.log("Event deleted!")
        res.send("event deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ONE EVENT
router.get('/:id', async (req, res) => {
    try {
        const event_id = await Event.findById(req.params.id)
        if(!event_id){
            return res.status(404)
        }
        res.status(200).send(event_id)
        // console.log(allEvent)

    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL EVENTS
router.get('/', async (req, res, next) => {
      try {
        const allEvent = await Event.find({gggg})
        res.status(200).send(allEvent)
        // console.log(allEvent)

    } catch (err) {
       next(err)
    }
})






module.exports = router;