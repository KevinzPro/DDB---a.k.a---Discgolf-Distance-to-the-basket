const { ObjectId } = require('bson');
const mongoose = require('mongoose');


const basketSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    layout_id:{
        type: ObjectId
    },
    basketnumber: {
        required: true,
        type: Number
    },
    BAR:{
        required: true,
        type: Number
    },
    distanceToBasket:{
        required: true,
        type: Number
    },
    cordinates:{
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('basket', basketSchema)