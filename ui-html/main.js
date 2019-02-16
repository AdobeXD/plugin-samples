async function menuCommand() {
  // Get and show the dialog
  const dialog = getDialog();
  const result = await dialog.showModal();

  // Exit if the user cancels the modal
  if (result === "reasonCanceled")
    return console.log("User clicked cancel or escape.");

  // Exit on user completion of task
  return console.log(`Your name is ${result}`);
}

function getDialog() {
  // Get the dialog if it already exists
  let dialog = document.querySelector("dialog");

  if (dialog) {
    console.log("Dialog already loaded in DOM. Reusing...");
    return dialog;
  }

  // Otherwise, create and return a new dialog
  return createDialog();
}

function createDialog() {
  console.log(`
Adding dialog to DOM. 
This will remain in the DOM until \`dialog.remove()\ is called,
or your plugin is reloaded.
  `);

  //// Add your HTML to the DOM
  document.body.innerHTML = `
    <style>
        form {
            width: 400px;
        }
    </style>
    <dialog>
        <form method="dialog">
            <h1>Hello HTML!</h1>
            <label>
                <span>What's your name?</span>
                <input uxp-quiet="true" type="text" id="name" placeholder="Your name"/>
            </label>
            <footer>
                <button id="cancel">Cancel</button>
                <button type="submit" id="ok" uxp-variant="cta">OK</button>
            </footer>
        </form>
    </dialog>
  `;

  //// Get references to DOM elements
  // Each of these will be used in event handlers below
  const [dialog, form, cancel, ok, name] = [
    `dialog`,
    `form`,
    "#cancel",
    "#ok",
    "#name"
  ].map(s => document.querySelector(s));

  //// Add event handlers
  // Close dialog when cancel is clicked.
  // Note that XD handles the ESC key for you, also returning `reasonCanceled`
  cancel.addEventListener("click", () => dialog.close("reasonCanceled"));

  // Handle ok button click
  ok.addEventListener("click", e => handleSubmit(e, dialog, name));
  // Handle form submit via return key
  form.onsubmit = e => handleSubmit(e, dialog, name);

  return dialog;
}

function handleSubmit(e, dialog, name) {
  // Close the dialog, passing back data
  dialog.close(name.value);
  // Prevent further automatic close handlers
  e.preventDefault();
}

module.exports = {
  commands: {
    menuCommand
  }
};
