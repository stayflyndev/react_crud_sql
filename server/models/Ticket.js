import mongoose from 'mongoose';
const { Schema } = mongoose;

const hotelSchema = new Schema({
    title:
    {
        String,
        required: true
    },
    author: String,
    desc: String,
    distance: String, // String is shorthand for {type: String}
    comments: [{ body: String, date: Date }],
    photos: [{
        String
    }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});