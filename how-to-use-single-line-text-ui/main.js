const { Text, Color } = require("scenegraph");

// main container
let container = document.createElement("div");
container.style.minWidth = 400;
container.style.padding = 40;

// add title
let title = document.createElement("h1");
title.textContent = "What's your name?";
container.appendChild(title);

// single line text input
let textInput = document.createElement("input");
textInput.style.padding = 20;
container.appendChild(textInput);

//  close button
let closeButton = document.createElement("button");
closeButton.textContent = "Submit";
container.appendChild(closeButton);

//  create the dialog
let dialog = document.createElement("dialog");
dialog.appendChild(container);

// main function
async function singleLine(selection) {
    //  add the dialog to the main document
    document.body.appendChild(dialog);
    // Get user input from the text field
    const txt = await showDialog();
    // create a text element in XD
    createText(selection, txt)
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

function createText(selection, txt) {
    const text = new Text();
    text.text = `Welcome, ${txt}`;
    text.styleRanges = [
        {
            length: text.text.length,
            fill: new Color("#0000ff"),
            fontSize: 40
        }
    ];
    selection.insertionParent.addChild(text);
    text.moveInParentCoordinates(100, 100);
}

module.exports = {
    commands: {
        singleLine
    }
};