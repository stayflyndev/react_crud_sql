import mongoose from 'mongoose';
const { Schema } = mongoose;

const ticketSchema = new Schema({
    title:
    {
        String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    author: String,
    distance: String, // String is shorthand for {type: String}
    date: { type: Date, default: Date.now },
    ticketHolders: [{number: Number, unavailableTicket: {type: [Date]}}]
});

const ticket = mongoose.model('User', userSchema)
ticket.createIndexes()

export default ticket