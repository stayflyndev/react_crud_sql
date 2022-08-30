import mongoose from 'mongoose';
const { Schema } = mongoose;

const hotelSchema = new Schema({
    title:
    {
        String,
        required: true
    },
    author: String,
    desc: {String, required: true},
    distance: String, // String is shorthand for {type: String}
    comments: [{ body: String, date: Date }],
    photos: [{
        String
    }],
    tickets:[{String}],
    price:{Number, required:true},
    featured:{Boolean, default: false},
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});