import mongoose from 'mongoose';
const { Schema } = mongoose;

const ticketSchema = new Schema({
    title:
    {
        type: String,
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

export default  mongoose.model('Ticket', ticketSchema)
