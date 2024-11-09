'use strict'

const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();//start Express app



// middleware
app.use(express.json()); // Parses JSON bodies
app.use(cors());// enables cross-origin requests

// API routes
const apiRoutes = require('./backend/routes'); // import routes
app.use('/api', apiRoutes);


// serve frontend in production (GPT suggested it, don't quite understand)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

    // serve index.html for all other routes to support client-side routing
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
}

// set the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});