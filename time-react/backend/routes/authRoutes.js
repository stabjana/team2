const express = require('express');
const router = express.Router();

//login route
router.post('/login', (req, res) => {
    //add login logic here




    res.json({ message: 'Login successful' });
});

//signup route
router.post('/signup', (req, res) => {
    //add login logic here




    res.json({ message: 'Signup successful' });
});

module.exports = router;