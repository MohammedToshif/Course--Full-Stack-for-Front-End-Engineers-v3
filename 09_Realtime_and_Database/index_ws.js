
const express = require('express');
    const server = require('http').createServer();
    const app = express();

    app.get('/', function(req, res) {
        res.sendFile('index.html', {root: __dirname});
    });

    server.on('request', app);
    server.listen(8080, function () { console.log('Listening on 8080'); });