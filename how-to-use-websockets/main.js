const { Text, Color } = require("scenegraph");

// connection is opened and ready to use
// main container
let container = document.createElement("form");
container.style.minWidth = 250;

// add title
let title = document.createElement("h1");
title.textContent = "What's your name?";
container.appendChild(title);

// single line text input
let textInput = document.createElement("input");
textInput.style.padding = 20;
container.appendChild(textInput);

//  footer
let footer = document.createElement("footer");
container.appendChild(footer);
//  close button
let closeButton = document.createElement("button");
closeButton.uxpVariant = "cta"
closeButton.textContent = "Submit";
footer.appendChild(closeButton);

//  create the dialog
let dialog = document.createElement("dialog");
dialog.appendChild(container);

async function sendData() {

    // Create WebSocket connection.
    var connection = new WebSocket('ws://127.0.0.1:1337');
    const uxp = require("uxp")

    // async function sendData() {
    //     uxp.shell.openExternal(`http://localhost:8000`)
    // }

    //  add the dialog to the main document
    document.body.appendChild(dialog);
    // Get user input from the text field
    // const txt = await showDialog();

    connection.onopen = function () {

        console.log('connection open')
        connection.send(txt);

    };

    connection.onerror = function (error) {
        // an error occurred when sending/receiving data
    };

    connection.onmessage = function (message) {
        // try to decode json (I assume that each message
        // from server is json)
        try {
            var json = JSON.parse(message.data);
            console.log(json)
        } catch (e) {
            console.log('This doesn\'t look like a valid JSON: ',
                message.data);
            return;
        }
        // handle incoming message
    };
}

function showDialog() {
    return new Promise((resolve, reject) => {
        dialog.showModal()
        closeButton.onclick = (e) => {
            dialog.close();
            resolve(textInput.value)
        }
    })
}

module.exports = {
    commands: {
        sendData
    }
}