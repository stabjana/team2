'use strict'

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const port = 5000;

const { //all functions here

} = require('./functionLibrary.js');

const requestHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;





    res.end();
}

const server = http.createServer(requestHandler);
server.listen(port, () => console.log(`Server is running on ${port}`));