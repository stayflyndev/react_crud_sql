const express = require('express');
const { createEvent, updateEvent, deleteEvent, getOneEvent, getAllEvents } = require('../controllers/events.controller');
const router = express.Router();
const Event = require("../models/Events");
const createError  = require('../utils/error');

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






module.exports = router;