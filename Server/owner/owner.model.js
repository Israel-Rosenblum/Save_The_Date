const mongoose = require('mongoose');

const nweOwner = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
});





module.exports = mongoose.model('owner', nweOwner);