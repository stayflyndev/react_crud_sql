const express = require('express')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const eventsRoute = require('./routes/events')
const ticketsRoute = require('./routes/tickets')

const mongoose = require('mongoose')

const app = express()
dotenv.config()
const port = 5000

//db connection 
const connect = async () => {
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
app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/events", eventsRoute)
app.use("/tickets", ticketsRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  connect()
  console.log(`Example app listening on port ${port}`)
})