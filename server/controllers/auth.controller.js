import User from '../models/Users.js'
import bcrypt from 'bcrypt';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import mysql from 'mysql2';
import {db_connection} from '../db.config.js'


//CREATE NEW USER
//POST

export const registerUserr = (req, res) => {


    const sqlquery = "SELECT * FROM accounts ";
    db_connection.query(sqlquery, function (err, data) {
        console.log(data)
        res.send(data)
    }

)}

export const registerUser = (req, res) => {

//DOES USER EXISTS
    const sqlquery = "SELECT * FROM accounts WHERE email = ?";
    db_connection.query(sqlquery, [req.body.email], function (err, data) {
     console.log(data)
    if(err) return res.status(500).json(err)
    if (data.length) return res.status(404).json("Existing Account")

    const salt = bcrypt.genSaltSync(10)
    const hashed = bcrypt.hashSync(req.body.email, salt)

    const query = "INSERT INTO accounts (`first_name`, `email`, `password`) VALUE (?) "

    const user_vals = [req.body.first_name, req.body.email, hashed]
    console.log(user_vals)

    db_connection.query(query, [user_vals], (err, data) => {
        if(err) return res.status(500).json(err)
        return res.status(200).json("User created")
        


    })



    // const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)
    // if(!checkPassword) return res.status(400).json("wrong info entered")

    // const token = jwt.sign({ id: data[0].id}, "secretkey")
    // const {password, ...other } = data[0]
    // res.cookie("accesstoken", token, {httpOnly: true}).status(200).json(other)

 })
    
}


//LOGIN USER TO SQL 
//POST
export const loginUser =  async (req, res, next) => {

const query = "SELECT * FROM `accounts` WHERE email = ?";
 db_connection.query(query, [req.body.email], (err, data) => {
    console.log(data[0].first_name)
    if(err) return res.status(500).json(err)
    if (data.length === 0 ) return res.status(404).json("No user found with the email ")
    
    const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)
    if(!checkPassword) return res.status(400).json("wrong info entered")


    //server create token by user id 
    const u_id =  { id: data[0].id}
    const token = jwt.sign(u_id, "secretkey")

    //destructor user password
    const {password, ...other } = data[0]


    //respond with token to the client
    res.cookie("accesstoken", token, {httpOnly: true}).status(200).json(other)
   
 })


   
    // try {
    //     const user = await User.findOne({ username: username })
    //     if (!user) return next(createError(404, "User not found"))

    //     const hashpw = user.password
    //     const passwordIsCorrect = await bcrypt.compare(userpw, hashpw)
    //     if (!passwordIsCorrect) return next(createError(500, "Incorrect Username or Password"))

    //     //dont send password / admin
    //     const {password, isAdmin, ...otherDetails} = user._doc

    //     const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)
    //     res.cookie("access_token", token, {httpOnly:true}).status(200).json({...otherDetails})
        
    // } catch (err) {

    //     next(err)

    // }
}

//LOGOUT USER

export const logout = (req, res) => {
    res.clearCookie("access token", { secure: true, sameSite: "none"}).status(200).json("Signed Out!")
 }
