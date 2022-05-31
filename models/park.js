const mongoose = require('mongoose');


// gives park propertys
const park = new mongoose.Schema({
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
    layouts: {
        required: true,
        type: Array
    },
    info: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('park', park)