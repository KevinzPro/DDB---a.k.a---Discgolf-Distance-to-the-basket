const { ObjectId } = require('bson');
const mongoose = require('mongoose');


const basketSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    layout_id:{
        type: ObjectId
    }
})

module.exports = mongoose.model('baket', basketSchema)