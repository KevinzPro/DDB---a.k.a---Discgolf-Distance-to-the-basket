const mongoose = require('mongoose');

const parkSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    cordinets: {
        required: true,
        type: Number
    },
    info: {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('park', parkSchema)