const http = require('http');
const webSocketsServerPort = 8888;

const server = http.createServer(function (request, response) {

});

server.listen(webSocketsServerPort, function () {
    console.log(`${(new Date())} Server is listening on port ${webSocketsServerPort}.`);
});

const WebSocketServer = require('websocket').server;
const wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function (request) {
    console.log(`${(new Date())} Connection from origin ${request.origin}.`);

    let connection = request.accept(null, request.origin);

    connection.sendUTF(
        JSON.stringify({ status: 'ongoing', message: `Server asks: what's your name?` })
    );

    // all messages from users here.
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            // process WebSocket message
            if (message.utf8Data.toLowerCase() === 'yes') {
                connection.sendUTF(
                    JSON.stringify({ status: 'done', message: `Server responded: Thanks, Enjoy!` })
                );
                connection.close();
            } else if (message.utf8Data.toLowerCase() === 'no') {
                connection.sendUTF(
                    JSON.stringify({ status: 'done', message: `Server responded: Disconnecting...!` })
                );
                connection.close();
            } else {
                connection.sendUTF(
                    JSON.stringify({ status: 'ongoing', message: `Server responded: hello ${message.utf8Data}, Do you like XD so far?` })
                );
            }
        } else {
            console.log('wrong message type')
            connection.close()
        }
    });

    connection.on('close', function (connection) {
        // close user connection
    });
});
