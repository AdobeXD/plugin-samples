const express = require('express');
const http = require('http');
const webSocketsServerPort = 8888;

const server = http.createServer(function (request, response) {
    // process HTTP request. Since we're writing just WebSockets
    // server we don't have to implement anything.
});

server.listen(webSocketsServerPort, function () {
    console.log((new Date()) + " Server is listening on port "
        + webSocketsServerPort);
});

const WebSocketServer = require('websocket').server;
wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function (request) {
    console.log((new Date()) + ' Connection from origin '
        + request.origin + '.');
    let connection = request.accept(null, request.origin);

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            // process WebSocket message
            console.log('message received')
        }
    });

    connection.on('close', function (connection) {
        // close user connection
    });
});
