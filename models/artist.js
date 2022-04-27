const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    artistcode: String,
    image: String,
    name: String
});

module.exports = mongoose.model('Artist', artistSchema);