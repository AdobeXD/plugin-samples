
// main container
let container = document.createElement("form");
container.style.minWidth = 250;

// add title
let title = document.createElement("h1");
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
document.body.appendChild(dialog);

async function connectWS() {
    const connection = new WebSocket("ws://127.0.0.1:8888");

    connection.onopen = async function () {
        console.log("connection open");
    };

    connection.onmessage = async function (response) {
        try {
            // make sure input box is empty and displayed
            textInput.value = "";
            textInput.style.display = "block";

            // handle incoming response
            let json = JSON.parse(response.data);
            if (json.status === "ongoing") {
                title.textContent = json.message;
                const txt = await showDialog();
                connection.send(txt);
            } else {
                title.textContent = json.message;
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

function showDialog() {
    return new Promise((resolve, reject) => {
        dialog.showModal();
        closeButton.onclick = (e) => {
            dialog.close();
            resolve(textInput.value);
        }
    })
}

module.exports = {
    commands: {
        connectWS
    }
}