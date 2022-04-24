const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    code: String,
    image: String,
    name: String,
    artist: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist'
        },
        image:String,
        name:String
    },
    favourite: Number
});

module.exports = mongoose.model('Song', songSchema);