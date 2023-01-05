// import User from"../models/Users.js";
import { createError } from "../utils/error.js";


//UPDATE ONE User
//PUT
export const updateUser = async (req, res, next) => {
    try {
           const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
           if(!User){
               return res.status(404).send();
           }
           res.status(200).json(user)
           console.log("User updated!")
           res.send("User updated")
       } catch (err) {
           next(err)
       }
   }

//DELETE ONE User
//DELETE
export const deleteUser = async (req, res, next) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) {
            return res.status(404).send()
        }
        res.status(200).json(user)
        console.log("User deleted!")
        res.send("User deleted")
    } catch (err) {
        next(err)
    }
}

//GET ONE User
//GET
export const getOneUser = async (req, res, next) => {
    try {
        const user_id = await User.findById(req.params.id)
        if(!user_id){
          
            return res.status(404)
        }
        res.status(200).send(user_id)
        // console.log(allUser)

    } catch (err) {
        next(err)
    }
}

//GET ALL UserS
//GET
export const getAllUsers = async (req, res, next) => {
    try {
      const allUser = await User.find()
      res.status(200).send(allUser)
      // console.log(allUser)

  } catch (err) {
     next(err)
  }
}

