import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import eventsRoute from './routes/events.js'
import ticketsRoute from './routes/tickets.js'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'


const app = express()
const port = 5000

dotenv.config()


//db connection 
const dbconnected = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
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

//middleware
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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