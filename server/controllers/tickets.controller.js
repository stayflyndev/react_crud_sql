// import Event from '../models/Events.js'
// import Ticket from '../models/Ticket.js'

export const createTicket = async(req, res, next) => {

    const eventId = req.params.eventid
    const newTicket = new Ticket(req.body)
 console.log("jj" + eventId)
try {
    const savedTicket = await newTicket.save()
    console.log(savedTicket)
    try{
        await Event.findByIdAndUpdate(eventId, {
            $push: { tickets: savedTicket._id }
        })
        console.log("ff " + savedTicket._id)
    } catch (err) {
        next(err)
    }
    res.status(200).json(savedTicket)
} catch (err) {
    next(err)
}


}


//UPDATE TICKET  REGISTRATION
//PUT
export const updateTicket = async (req, res, next) => {
    try {
           const ticket = await Event.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
           
           res.status(200).json(ticket)
           console.log("Ticket Registration updated!")
           res.send("ticket registration updated")
       } catch (err) {
           next(err)
       }
   }

//DELETE ONE Ticket registration
//DELETE
export const deleteTicket = async (req, res, next) => {
    const eventId = req.params.eventid
 console.log(eventId)
    try {
        const ticket  = await Ticket.findByIdAndDelete(req.params.id)
        try{
            await Event.findByIdAndUpdate(eventId, {
                $pull: { tickets: req.params.id }
            })
        } catch (err) {
            next(err)
        }
        res.status(200).json(ticket)
        console.log("Registration deleted!")
    } catch (err) {
        next(err)
    }
}

//GET ONE EVENT
//GET
export const getOneTicket = async (req, res, next) => {
    try {
        const ticket_id = await Ticket.findById(req.params.id)
       
        res.status(200).send(ticket_id)
        // console.log(allEvent)

    } catch (err) {
        next(err)
    }
}

//GET ALL EVENT TICKETS
//GET
export const getAllTickets = async (req, res, next) => {
    try {
      const allTickets = await Ticket.find()
      res.status(200).send(allTickets)
      // console.log(allEvent)

  } catch (err) {
     next(err)
  }
}