const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    image: String,
    name: String,
    songs:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Song'
        },
        image:String,
        name:String
    },
});

module.exports = mongoose.model('Album', albumSchema);