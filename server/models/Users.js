const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },// String is shorthand for {type: String}
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        Boolean,
        default: false
    }
},
    { timestamps: true });

const test = mongoose.model('User', userSchema)
test.createIndexes()

module.exports = test