import User from '../models/Users.js'
import bcrypt from 'bcrypt';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


//CREATE NEW USER
//POST
export const registerUser = async (req, res, next) => {

    const saltRounds = 10;
    const plainpassword = req.body.password
    try {
        const hashPw = await bcrypt.hash(plainpassword, saltRounds)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPw
        })
        console.log(newUser)
        //SAVE TO DB
        newUser.save()
        res.status(200).send("User created")
    } catch (err) {
        res.send()
        next("Problem: " + err)

    }
}


//LOGIN USER
//POST
export const loginUser = async (req, res, next) => {

    const username = req.body.username
    const userpw = req.body.password

    try {
        const user = await User.findOne({ username: username })
        if (!user) return next(createError(404, "User not found"))

        const hashpw = user.password
        const passwordIsCorrect = await bcrypt.compare(userpw, hashpw)
        if (!passwordIsCorrect) return next(createError(500, "Incorrect Username or Password"))

        //dont send password / admin
        const {password, isAdmin, ...otherDetails} = user._doc

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)
        res.cookie("access_token", token, {httpOnly:true}).status(200).json({...otherDetails})
        
    } catch (err) {

        next(err)

    }
}
