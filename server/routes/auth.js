const express = require('express')
const router = express.Router();
const registerUser = require('../controllers/auth.controller')

//CREATE NEW USER
//POST
router.post('/register', registerUser)


module.exports = router;