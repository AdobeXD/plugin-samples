
//  create the main container
let container = document.createElement("form");
//  don't forget to set your desired width
container.style.width = 400;

//  add your content
let hello = document.createElement("h1");
hello.textContent = "Hello World";
container.appendChild(hello);

//  include at least one way to close the dialog
let closeButton = document.createElement("button");
closeButton.textContent = "Close";
closeButton.onclick = (e) => dialog.close();
container.appendChild(closeButton);

//  create the dialog
let dialog = document.createElement("dialog");
//  add our container to it
dialog.appendChild(container);
//  add the dialog to the main document
document.body.appendChild(dialog);

//  this file is deliberately written in low level document.appendChild format.
//  Once the default stylesheets are integrated then we will remove most style properties
//  from this file and things should look decent.
module.exports = {
    commands: {
        menuCommand: function () {
            //  show the dialog
            dialog.showModal();
        }
    }
};