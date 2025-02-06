const express = require('express');
const UnscrambledWord = require('./models/unscrambled_word.model');
const ChallengeResult = require('./models/challenge_result.model');
const router = express.Router();

// Load the random scrambled word/sentence
router.get('/fetch', async (req, res) => {
    try {
        const unscrambledWords = await UnscrambledWord.find().lean();
        return res.status(200).json({ data: unscrambledWords });
    } catch (error) {
        // console.error(error);
        return res.status(500).json({ message: error.message });
    }
});

// Verify the submitted unscrambled word/sentence
router.post('/verify', async (req, res) => {
    try {
        const { selected_id, score, completionTime, typedAnswer } = req.body;
        const word = await UnscrambledWord.findOne({ _id: selected_id }).lean();
        
        // Converting both actual and typed answer with to lowercase,
        // avoid white spaces in the start and end and ensuring single spaces between words
        const normalizeText = (text) => text.toLowerCase().trim().replace(/\s+/g, ' ');
        const actualAnswer = normalizeText(word.answer);
        const userAnswer = normalizeText(typedAnswer);
        if (actualAnswer !== userAnswer) {
            return res.status(400).json({ message: "Words/sentence not matching" });
        }
        const storeResults = await ChallengeResult.create({
            score: score,
            time: completionTime,
            answer: userAnswer,
            ansRef: selected_id
        });
        return res.status(200).json({ message: "Success", data: storeResults });
    } catch (error) {
        // console.error(error.message);
        return res.status(500).json({ message: error.message });
    }
});



module.exports = router;