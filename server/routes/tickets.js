
import express from 'express'
import { createTicket, updateTicket, deleteTicket, getOneTicket, getAllTickets } from '../controllers/Tickets.controller.js';
const router = express.Router();

import { verifyAdmin } from '../utils/verifyToken.js';
// import createError from '../utils/error.js';

//CREATE NEW Tickets
router.post('/:eventid', verifyAdmin, createTicket)

//UPDATE Tickets
router.put('/:id', verifyAdmin, updateTicket)

//DELETE Tickets
router.delete('/:id/:eventid', verifyAdmin, deleteTicket)

//GET ONE Tickets
router.get('/:id', getOneTicket )

//GET ALL TicketsS
router.get('/', getAllTickets)


export default router;