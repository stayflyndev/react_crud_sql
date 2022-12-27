import express from 'express'
const router = express.Router();
import {registerUser, loginUser, registerUserr} from '../controllers/auth.controller.js'


//CREATE & SIGNIN NEW USER
//POST
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/login', loginUser)
router.post('/registerr', registerUserr)



//

export default router;