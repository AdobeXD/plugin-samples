const application = require("application");
const fs = require("uxp").storage.localFileSystem;

async function exportRendition(selection) {
  if (selection.items.length === 0)
    return console.log("No selection. Guide the user on what to do.");

  const folder = await fs.getFolder();
  const file = await folder.createFile("rendition.png", { overwrite: true });

  const renditionOptions = [
    {
      node: selection.items[0],
      outputFile: file,
      type: application.RenditionType.PNG,
      scale: 2
    }
  ];

  await application.createRenditions(renditionOptions);
  const dialog = createDialog(file.nativePath);
  return dialog.showModal();
}

function createDialog(filepath) {
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

  const dialog = document.querySelector("#dialog");
  dialog.addEventListener("close", e => dialog.remove());

  return dialog;
}

module.exports = {
  commands: {
    exportRendition
  }
};
