const application = require("application");
const fs = require("uxp").storage.localFileSystem;

async function exportRendition(selection) {
  // Exit if there's no selection
  // For production plugins, providing feedback to the user is expected
  if (selection.items.length === 0)
    return console.log("No selection. Guide the user on what to do.");

  // Get a folder by showing the user the system folder picker
  const folder = await fs.getFolder();
  // Exit if user doesn't select a folder
  if (!folder) return console.log("User canceled folder picker.");

  // Create a file that will store the rendition
  const file = await folder.createFile("rendition.png", { overwrite: true });

  // Create options for rendering a PNG.
  // Other file formats have different required options.
  // See `application#createRenditions` docs for details.
  const renditionOptions = [
    {
      node: selection.items[0],
      outputFile: file,
      type: application.RenditionType.PNG,
      scale: 2
    }
  ];

  try {
    // Create the rendition(s)
    const results = await application.createRenditions(renditionOptions);

    // Create and show a modal dialog displaying info about the results
    const dialog = createDialog(results[0].outputFile.nativePath);
    return dialog.showModal();
  } catch (err) {
    // Exit if there's an error rendering.
    return console.log("Something went wrong. Let the user know.");
  }
}

function createDialog(filepath) {
  // Add your HTML to the DOM
  document.body.innerHTML = `
    <style>
    form {
        width: 400px;
    }
    </style>
    <dialog id="dialog">
        <form method="dialog">
            <h1>Redition saved</h1>
            <p>Your rendition was saved at:</p>
            <input type="text" uxp-quiet="true" value="${filepath}" readonly />
            <footer>
            <button type="submit" uxp-variant="cta" id="ok-button">OK</button>
            </footer>
        </form>
    </dialog>
  `;

  // Remove the dialog from the DOM every time it closes.
  // Note that this isn't your only option for DOM cleanup.
  // You can also leave the dialog in the DOM and reuse it.
  // See the `ui-html` sample for an example.
  const dialog = document.querySelector("#dialog");
  dialog.addEventListener("close", e => dialog.remove());

  return dialog;
}

module.exports = {
  commands: {
    exportRendition
  }
};
