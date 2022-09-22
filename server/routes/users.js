import express from 'express'
import {  updateUser, deleteUser, getOneUser, getAllUsers } from '../controllers/users.controller.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();


// router.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("Hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello user, you are logged in and allowed to make changes")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello admin, you are logged in and allowed to make changes")
// })


//UPDATE User
router.put('/:id', verifyUser, updateUser)

//DELETE User
router.delete('/:id',verifyUser, deleteUser)

//GET ONE User
router.get('/:id', verifyUser, getOneUser )

//GET ALL UserS
router.get('/', verifyAdmin, getAllUsers)






export default router;