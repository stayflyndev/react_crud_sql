const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    title: String,
    author: String,
    desc: {String},
    distance: String, // String is shorthand for {type: String}
    comments: [{ body: String, date: Date }],
    photos: [
        String
    ],
    tickets:[String],
    price:{Number},
    featured:{Boolean, default: false},
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

module.exports = mongoose.model('Event', eventSchema)