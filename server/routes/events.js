import express from 'express'
import { createEvent, updateEvent, deleteEvent, getOneEvent, getAllEvents } from '../controllers/events.controller.js';
const router = express.Router();
import Event from "../models/Events.js";
// import createError from '../utils/error.js';

//CREATE NEW EVENT
router.post('/', createEvent)

//UPDATE EVENT
router.put('/:id', updateEvent)

//DELETE EVENT
router.delete('/:id', deleteEvent)

//GET ONE EVENT
router.get('/:id', getOneEvent )

//GET ALL EVENTS
router.get('/', getAllEvents)






export default router;