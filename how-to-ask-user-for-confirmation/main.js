// helper function
function createButton(text, variant) {
    let newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.setAttribute("uxp-variant", variant);
    return newButton;
}

function createDialog() {
    //  create the dialog
    let dialog = document.createElement("dialog");

    //  create the form container
    let container = document.createElement("form");
    container.setAttribute("method", "dialog");
    container.style.minWidth = 300;

    //  add the content.
    let message = document.createElement("h1");
    message.textContent = "Are you sure?";
    container.appendChild(message);

    // create the footer
    let footer = document.createElement("footer");

    // create the buttons using the helper function
    let yesButton = createButton("Yes", "cta");
    yesButton.onclick = (e) => dialog.close();

    let noButton = createButton("No");
    noButton.onclick = (e) => dialog.close();

    //  add the buttons to the footer.
    footer.appendChild(yesButton);
    footer.appendChild(noButton);

    // add the footer to the form container.
    container.appendChild(footer);

    // add the container to the dialog. 
    dialog.appendChild(container);

    //  add the dialog to the main document
    document.body.appendChild(dialog);

    return dialog;
}

//same UI created in ES6
function createHTMLDialog() {
    const $ = sel => document.querySelector(sel);

    document.body.innerHTML = `
    <style>
        #myDialog form {
            width: 300px;
        }
    </style>
    <dialog id="myDialog">
        <form method="dialog">
            <h1>Are you sure?!</h1>
            <footer>
                <button id="ok" uxp-variant="cta">Yes</button>
                <button id="cancel">No</button>
            </footer>
        </form>
    </dialog>
    `;

    const [dialog, form, cancel, ok, name] = ["#myDialog", "#myDialog form", "#cancel", "#ok", "#name"].map(s => $(s));
    cancel.addEventListener("click", () => {
        dialog.close();
    });
    ok.addEventListener("click", () => {
        dialog.close();
    });
    return dialog;
}

async function showDialog(dialog) {
    try {
        const r = await dialog.showModal();
        if (r) {
            console.log(`dialog loaded succesfully!`);
        }
    } catch (err) {
        // cancelled with ESC
    } finally {
        dialog.remove();
    }
}

module.exports = {
    commands: {
        menuCommand: async function() {
                let dialog = createDialog();
                showDialog(dialog);
            },

            menuCommandHTML: async function() {
                let dialog = createHTMLDialog();
                showDialog(dialog);
            }
    }
};