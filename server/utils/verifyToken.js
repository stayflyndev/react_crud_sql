import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken'

//CHECK TOKEN
export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
   
    if(!token){
        return next(createError(401, "Not Authenticated"))
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403, "INValid token"))
        req.user = user
        next()
    })
}

//CHECK TOKEN MATCHES USER

export const verifyUser = (req, res, next) => {
verifyToken(req, res, next, () =>{
    //check if you are the user 
    if(req.user.id === req.params.id || req.user.isAdmin) {
        next()
        
    } else {
        if(err) return next(createError(403, "Not authorized"))

    }

})
}

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () =>{
        //check if you are the user 
        if(req.user.isAdmin) {
            next()
            
        } else {
            if(err) return next(createError(403, "Not authorized"))
    
        }
    
    })
    }

