import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventSchema = new Schema({
    title: String,
    location: String,
    author: String,
    desc: String,
    distance: String, // String is shorthand for {type: String}
    comments: [{ body: String, date: Date }],
    photos: [String],
    tickets:[String],
    cost: Number,
    featured:{Boolean, default: false},
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

//document
export default  mongoose.model('Event', eventSchema)