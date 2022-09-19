import express from 'express'
const router = express.Router();
import {registerUser, loginUser} from '../controllers/auth.controller.js'

//CREATE & SIGNIN NEW USER
//POST
router.post('/register', registerUser)
router.post('/login', loginUser)


//

export default router;