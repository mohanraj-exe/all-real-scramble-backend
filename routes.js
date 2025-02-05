const express = require('express');
const router = express.Router();

// Register a new user
router.post('/verify', async (req, res) => {
    // const { username, email, password } = req.body;

    try {
        return res.status(200).json({ message: "Success" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send('Server error');
    }
});



module.exports = router;