const express = require('express')
const router = express.Router();
const Event = require("../models/Events")
 
//CREATE NEW EVENT
router.post('/', async (req, res) => {

    const newEvent = new Event(req.body)

    try{
        const savedEvent = await newEvent.save()
        res.status(200).json(savedEvent)
        console.log("Event!")
        res.send("h")


    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;