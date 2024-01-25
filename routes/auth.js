// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');
const authenticateUser = require('../middleware');

router.post('/register', authController.registerUser);


router.post('/login', authController.loginUser);

router.get('/protected', authenticateUser, (req, res) => {
    res.json({ message: 'You have access to this protected route!' });
});

module.exports = router;
