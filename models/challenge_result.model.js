const mongoose = require('mongoose');

// Schema
const ChallengeResultSchema = new mongoose.Schema({

    score: { type: String },
    time: { type: String },
    answer: { type: String },
    ansRef: { type: mongoose.Types.ObjectId, ref: 'word' }

}, { timestamps: true });

const ChallengeResult = mongoose.model('challengeResult', ChallengeResultSchema);

module.exports = ChallengeResult;