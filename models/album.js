const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    artistcode: String,
    albumcode: String,
    image: String,
    name: String,
    artist: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist'
        },
        image:String,
        name:String
    }
});

module.exports = mongoose.model('Album', albumSchema);