async function menuCommand() {
  // Get the dialog element
  const dialog = getDialog();
  // Show the dialog and get a result when the user closes it
  const result = await dialog.showModal();

  if (result === "reasonCanceled") {
    // Exit if the user cancels the modal
    return console.log("User clicked cancel or escape.\n");
  } else {
    // Exit on user completion of task
    return console.log(`Your name is ${result}.\n`);
  }
}

function getDialog() {
  // Get the dialog if it already exists
  let dialog = document.querySelector("dialog");

  if (dialog) {
    console.log("Dialog already loaded in DOM. Reusing...\n");
    return dialog;
  } else {
    // Otherwise, create and return a new dialog
    return createDialog();
  }
}

function createDialog() {
  console.log(
    "Adding dialog to DOM.\nIt will remain in the DOM until you call `dialog.remove()`, or your plugin is reloaded by XD.\n"
  );

  //// Add your HTML to the DOM
  document.body.innerHTML = `
    <style>
        dialog {
            width: 400px;
        }
        h1 {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .icon {
            width: 24px;
            height: 24px;
            overflow: hidden;
        }
    </style>
    <dialog>
        <form method="dialog">
            <h1><span>Hello HTML!</span><img class="icon" src="images/icon@1x.png"></h1>
            <hr />
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
    "dialog",
    "form",
    "#cancel",
    "#ok",
    "#name"
  ].map(s => document.querySelector(s));

  //// Add event handlers
  // Close dialog when cancel is clicked, with an optional return value.
  // Note that XD handles the ESC key for you, also returning "reasonCanceled"
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
