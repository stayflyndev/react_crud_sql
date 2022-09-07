const express = require('express')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const eventsRoute = require('./routes/events')
const ticketsRoute = require('./routes/tickets')

const mongoose = require('mongoose')
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
  console.log("Interrupted with error: " + errorMessage)
  return res.status(errorStatus).json({
    message: errorMessage
    
  })
  
})

app.listen(port, () => {
  dbconnected()
  console.log(`Example app listening on port ${port}`)
})