const { ObjectId } = require('bson');
const mongoose = require('mongoose');


const layoutSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    park_id:{
        type: ObjectId
    },
    description:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('layout', layoutSchema)