const mongoose = require('mongoose');

// Schema
const UnscrambledSchema = new mongoose.Schema({

    level: { type: String },
    scrambled: { type: String },
    answer: { type: String }

});

const UnscrambledWord = mongoose.model('word', UnscrambledSchema);

module.exports = UnscrambledWord;