const application = require("application");
const fs = require("uxp").storage.localFileSystem;

async function exportRendition(selection) {
    if (selection.items.length > 0) {
        const file = await fs.getFileForSaving();

        const renditions = [{
            node: selection.items[0],
            outputFile: file,
            type: "png",
            scale: 2
        }];

        application.createRenditions(renditions)
            .then(results => {
                // create the dialog
                let dialog = document.createElement("dialog");

                // main container
                let container = document.createElement("div");
                container.style.minWidth = 400;
                container.style.padding = 40;

                // add content
                let title = document.createElement("h3");
                title.style.padding = 20;
                title.textContent = `PNG Rendition has been saved at ${file.nativePath}`;
                container.appendChild(title);

                // close button
                let closeButton = document.createElement("button");
                closeButton.textContent = "Got it!";
                container.appendChild(closeButton);
                closeButton.onclick = (e) => {
                    dialog.close();
                }

                document.body.appendChild(dialog);
                dialog.appendChild(container);
                dialog.showModal()
            })
            .catch(error => {
                console.log(error);
            })
    }
}

module.exports = {
    commands: {
        exportRendition
    }
};
