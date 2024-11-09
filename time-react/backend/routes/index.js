const express = require('express');
const router = express.Router();

// route modules
const authRoutes = require('./authRoutes');
const gameRoutes = require('./gameRoutes');

// use the route modules
router.use('/auth', authRoutes);  // Routes for authentication
router.use('/game', gameRoutes);  // Routes for game actions

module.exports = router;