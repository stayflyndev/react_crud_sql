const User = require('../models/Users')
const bcrypt = require('bcrypt')

//CREATE NEW USER
//POST
const registerUser = async (req, res, next) => {
const saltRounds = 10;
const plainpassword = req.body.password
    try {
        bcrypt
        .hash(plainpassword, saltRounds)
        .then(hash => {
            console.log(hash)
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: hash
            })
            console.log(newUser)
           newUser.save()
        })
        .catch(error => console.error(error.message))

      
       
        res.status(200).send("User Has been created")
    } catch (err) {
        next(err)
        res.send("User not created , " + err)
    }

}


module.exports = registerUser