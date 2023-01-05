import express from 'express'
const router = express.Router();
import {registerUser, loginUser, logoutUser, registerUserr} from '../controllers/auth.controller.js'


//CREATE & SIGNIN NEW USER
//POST
router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/login', registerUserr)

router.post('/logout', logoutUser)
router.post('/registerr', registerUserr)



//

export default router;