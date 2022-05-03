const   mongoose    =   require('mongoose'),
        album       =   require('../models/album');

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

    favourite: Number
});

songSchema.post("remove", document => {
    const songId = document._id;
    album.find({name: { $in :[songId]}}).then(song => {
        Promise.all{
            song.map(album => album.)
        }
    })
})

module.exports = mongoose.model('Song', songSchema);