//  create the dialog
let dialog = document.createElement("dialog");

//  create the form container
let container = document.createElement("form");
container.setAttribute("method", "dialog");
container.style.minWidth = 400;
container.style.padding = 40;

//  add the content.
let message = document.createElement("h1");
message.textContent = "Are you sure?";
container.appendChild(message);

// create the footer
let footer = document.createElement("footer");

// helper function
function createButton(text, variant) {
    let newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.setAttribute("uxp-variant", variant);
    newButton.onclick = (e) => dialog.close();
    return newButton;
}

// create the buttons using the helper function
let yesButton = createButton("Yes", "cta");
let noButton = createButton("No");

//  add the buttons to the footer.
footer.appendChild(yesButton);
footer.appendChild(noButton);

// add the footer to the form container.
container.appendChild(footer);

// add the container to the dialog. 
dialog.appendChild(container);

//  add the dialog to the main document
document.body.appendChild(dialog);

module.exports = {
    commands: {
        showDialog: async function() {
            dialog.showModal();
        }
    }
};