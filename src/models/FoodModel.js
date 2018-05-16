var mongoose = require('mongoose');

var foodSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image_url: {
        type: String
    },
    price:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('foods', foodSchema);