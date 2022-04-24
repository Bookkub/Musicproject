const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    code: String,
    image: String,
    name: String
});

module.exports = mongoose.model('Artist', artistSchema);