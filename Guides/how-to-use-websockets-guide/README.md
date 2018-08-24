# How to Use Websockets

This sample app will show you how to use Websocket to communicate real-time between the plugin's UI and a server. Note that this sample uses UI only as you cannot manipulate scenegraphs real-time yet. **The plugin code can be found [here](https://github.com/AdobeXD/Plugin-Samples/tree/master/how-to-use-websockets)**.

<!-- $ doctoc ./readme.md --title "## Contents" --entryprefix 1. --gitlab --maxlevel 2 -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Contents

1. [Technology Used](#technology-used)
1. [Prerequisites](#prerequisites)
1. [Configuration](#configuration)
1. [Development Steps](#development-steps)
1. [Next Steps](#next-steps)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Technology Used
- References:
    - [Websocket](https://adobe-xd.gitbook.io/plugin-api-reference/uxp-api-reference/network-apis/websocket)
    - [UI](https://adobe-xd.gitbook.io/plugin-api-reference/user-interface/ui-concepts)

## Prerequisites
- Basic knowledge of HTML, CSS, and JavaScript
- Basic knowledge of `WebSocket`
- [Getting Started Guide](../getting-started-guide)

## Configuration

The following steps will help you get this sample up and running.

### Install Node.js packages

Create a folder called `chatServer` folder and `npm init`.
```
$ mkdir chatServer
$ cd chatServer
$ npm init
```

### Install `websocket` module
```
npm install --save websocket
```

## Development Steps - Plugin

### 1. Create plugin scaffold

As described in the [Getting Started Guide](/Guides/getting-started-guide), create the directory for your plugin:

```
$ cd ~/Library/Application Support/Adobe/Adobe XD CC (Prerelease)/plugins
$ mkdir com.adobe.xd.websockets
$ cd com.adobe.xd.websockets
$ touch manifest.json
$ touch main.js
``` 

Edit the manifest file for your plugin:

```js
{
    "id": "com.adobe.xd.websockets",
    "name": "Websockets",
    "version": "0.0.1",
    "host": {
        "app": "XD",
        "minVersion": "8.0"
    },
    "uiEntryPoints": [
        {
            "type": "menu",
            "label": "How to use websockets",
            "commandId": "connectWS"
        }
    ]
}
```

In the `main.js` file, link the commandId to a handler function

```js
async function connectWS(selection) {
    // The body of this function is added later
}

module.exports = { 
    commands: {
        connectWS
    }
};
```

### 2. Create a container and set width/padding
```js
let container = document.createElement("div"); // [1]
container.style.minWidth = 400; // [2]
container.style.padding = 40;
```
1. Just like HTML DOM APIs, you can use `document.createElement` method to create UI objects
2. Elements have the `style` property which contains metrics properties you can set

### 3. Add elements into the container
```js
// add title
let title = document.createElement("h1");  // [1]
container.appendChild(title);

// single line text input
let textInput = document.createElement("input");  // [2]
textInput.style.padding = 20;
container.appendChild(textInput);

//  close button
let closeButton = document.createElement("button");  // [3]
closeButton.uxpVariant = "cta"
closeButton.textContent = "Submit";
container.appendChild(closeButton);
```
1. Create a text element and append it to the container
2. Create a single line text input and append it to the container
3. You need at least one exit point. Create a close button and add it to the container

### 4. Create a dialog and add the container 
```js
let dialog = document.createElement("dialog"); // [1]
dialog.appendChild(container); // [2]
```
1. The `dialog` element is the modal window that pops down in XD
2. Add the container created in the previous steps to `dialog`


### 6. Create an async helper function to receive user input
```js
function showDialog() {
    return new Promise((resolve, reject) => { // [1]
        dialog.showModal() // [2]
        closeButton.onclick = (e) => { //[3]
            dialog.close();
            resolve(textInput.value)
        }
    })
}
```
1. Create a promise object to return after receiving user input
2. `.showModal` method shows the dialog (modal) in XD
3. Create a listener for the click event, resolve with the text value, and close the dialog

### 7. Write the main function, `connectWS`
```js
async function connectWS() {
    const connection = new WebSocket("ws://127.0.0.1:8888"); // [1]

    connection.onopen = async function () {
        console.log("connection open");
    };

    connection.onmessage = async function (response) {
        try {
            // make sure input box is empty and displayed
            textInput.value = ""; // [2]
            textInput.style.display = "block";

            // handle incoming response
            let json = JSON.parse(response.data);
            if (json.status === "ongoing") {
                title.textContent = json.message;
                const txt = await showDialog(); // [3]
                connection.send(txt); // [4]
            } else {
                title.textContent = json.message; // [5]
                textInput.style.display = "none";
                closeButton.textContent = "OK";
            }
        } catch (e) {
            console.log(`This does not look like a valid JSON: ${response.data}`);
            return;
        }
    };

    connection.onclose = async function () {
        console.log("connection closed");
    };

    connection.onerror = function (error) {
        console.log("server error");
    };
}
```
1. Create a websocket connection. Make sure to match the port your server is running on
2. When a new message is received from server, make sure to empty the input field and make sure to show the field
3. When the received message's status is `ongoing` show the dialog and take user's input
4. Send the message entered by user to server via websocket
5. If the received message's status is not `ongoing`, that means the socket connection is going to be closed - hide the input field and let the user close the dialog

## Development Steps - Server

### Create the main file, `index.js`
Create `index.js` inside the `chatServer` folder created during the [Configuration](#configuration) step above
```
$ touch index.js
```

### Require necessary npm modules
```js
const express = require('express');
const http = require('http');
```

### Create the server and start listening to a port
```js
const webSocketsServerPort = 8888; 
const server = http.createServer();
server.listen(webSocketsServerPort, function () {
    console.log(`${(new Date())} Server is listening on port ${webSocketsServerPort}.`);
});
```

### Create an instance of websocket server
```js
const WebSocketServer = require('websocket').server;
const wsServer = new WebSocketServer({
    httpServer: server
});
```

### Write websocket logic inside `.on` block
```js
wsServer.on('request', function (request) {
    console.log(`${(new Date())} Connection from origin ${request.origin}.`);

    let connection = request.accept(null, request.origin); // [1]

    connection.sendUTF( // [2]
        JSON.stringify({ status: 'ongoing', message: `Server asks: what's your name?` })
    );

    // all messages from users here.
    connection.on('message', function (message) { // [3]
        if (message.type === 'utf8') { 
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
            connection.close() // [6]
        }
    });

    connection.on('close', function (connection) {
        // close user connection
    });
});
```
1. When the server is on, create a connection with each client. This sample assumes there is only one connection
2. When the connection is built, send the first message to the client
3. when a new message is received, make sure the message type is `utf8` and respond by using `sendUTF` method

## Next Steps

Description

- [How to debug](how-to-debug)
- [Other samples](https://github.com/AdobeXD/Plugin-Samples)
