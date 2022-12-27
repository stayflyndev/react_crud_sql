import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import eventsRoute from './routes/events.js'
import ticketsRoute from './routes/tickets.js'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import mysql from 'mysql2';
import session from 'express-session';
import bodyParser from 'body-parser'


const app = express()
const port = 5000
//middleware
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())
dotenv.config()

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


//db connection 
const dbconnected = async () => {
  try {
    await mongoose.connect('mongodb+srv://toria:Shadbaby90@cluster0.fjcyhoo.mongodb.net/?retryWrites=true&w=majority');
    console.log("db connected")
    
  } catch (error) {
    //initial connection
    throw error;
  }
}

//continue a connection after initialization
mongoose.connection.on('disconnected', () => {
 console.log("disconnected");
})



// app.use("/auth", authRoute)
// app.use("/", (req, res) => res.json("hjhh"))
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/events", eventsRoute)
app.use("/tickets", ticketsRoute)


//ERR HANDLING FROM THE ROUTES
app.use((error, req, res, next) => {
  const errorStatus = error.status || 502
  const errorMessage = error.message || "Ooops! There was an error."
  console.log("Interrupted with error: " + errorMessage);
  return res.status(errorStatus).json({
    success:false, 
    errorStatus: errorStatus,
    message: errorMessage,

  })
  
})

app.listen(port, () => {
  dbconnected()
  console.log(`Example app listening on port ${port}`)
})