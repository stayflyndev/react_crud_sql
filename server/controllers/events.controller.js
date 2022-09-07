const Event = require("../models/Events");

//CREATE AN EVENT
//POST
const createEvent = async(req, res, next) => {
    const newEvent = new Event(req.body)
    console.log(newEvent)
    try {
        const savedEvent = await newEvent.save()
        res.status(200).json(savedEvent)
        console.log("Event!")
        res.send("h")
    } catch (err) {
       next(err) // app.use error middleware
    }
}

//UPDATE ONE EVENT
//PUT
const updateEvent = async (req, res, next) => {
    try {
           const event = await Event.findByIdAndUpdate(req.params.id, req.body, {new:true})
           if(!event){
               return res.status(404).send();
           }
           res.status(200).json(event)
           console.log("Event updated!")
           res.send("event updated")
       } catch (err) {
           next(err)
       }
   }

//DELETE ONE EVENT
//DELETE
const deleteEvent = async (req, res, next) => {

    try {
        const event = await Event.findByIdAndDelete(req.params.id)
        if(!event) {
            return res.status(404).send()
        }
        res.status(200).json(event)
        console.log("Event deleted!")
        res.send("event deleted")
    } catch (err) {
        next(err)
    }
}

//GET ONE EVENT
//GET
const getOneEvent = async (req, res, next) => {
    try {
        const event_id = await Event.findById(req.params.id)
        if(!event_id){
          
            return res.status(404)
        }
        res.status(200).send(event_id)
        // console.log(allEvent)

    } catch (err) {
        next(err)
    }
}

//GET ALL EVENTS
//GET
const getAllEvents = async (req, res, next) => {
    try {
      const allEvent = await Event.find()
      res.status(200).send(allEvent)
      // console.log(allEvent)

  } catch (err) {
     next(err)
  }
}

module.exports = { createEvent, updateEvent, deleteEvent, getOneEvent, getAllEvents }
