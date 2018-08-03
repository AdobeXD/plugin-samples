// main container
let container = document.createElement("div");
container.style.minWidth = 400;
container.style.minHeight = 500;
container.style.padding = 20;

// add title
let title = document.createElement("h1");
title.textContent = "Displaying an image";
title.style.padding = 40;
container.appendChild(title);

// add image
let img = document.createElement("img");
img.style.padding = 30;
img.src = "portrait.png"
img.style.height = "100%"
img.style.display = "block";
img.style.margin = "auto";
img.style.width = "100%";
container.appendChild(img);

// close button
let closeButton = document.createElement("button");
closeButton.textContent = "OK!";
closeButton.style.padding = 50;
closeButton.style.margin = 50;
closeButton.onclick = (e) => {
    dialog.close();
}
container.appendChild(closeButton);

// create the dialog
let dialog = document.createElement("dialog");
dialog.appendChild(container);

// main function
function displayImage(selection) {
    //  add the dialog to the main document
    document.body.appendChild(dialog);
    dialog.showModal()
}

module.exports = {
    commands: {
        displayImage
    }
};