const   mongoose    =   require('mongoose');

const songSchema = new mongoose.Schema({
    artistcode: String,
    albumcode: String,
    image: String,
    name: String,
    lyric: String,
    artist: {
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist'
        },
        image:String,
        name:String
    },
    album:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Album'
        },
        image:String,
        name:String
    },
    favourite: {
        type: Number,
        default:0
    },
    source: String
});

module.exports = mongoose.model('Song', songSchema);