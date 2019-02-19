var commands = require("commands");

let dialog;

const yourHtml =
    `<style>
        .visible {
            display: flex;
        }
        .hidden {
            display: none;
        }
        .dialog {
            height: 170px;
            width: 300px;
        }
    </style>
    <form method="dialog" class="dialog">
        <h1 class="h1">Create Custom Size Post</h1>
        <hr>
        <label>
            <span>Choose Platform</span>
            <select id="platform">
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="pinterest">Pinterest</option>
                <option value="custom" selected>Custom</option>
            </select>
        </label>
        <div id="custom" class="hidden">
            <input type="text" uxp-quiet="true" id="width"
                placeholder="width" />
            <input type="text" uxp-quiet="true" id="height"
                placeholder="height" />
        </div>
        <footer>
            <button id="cancel" type="reset" uxp-variant="primary">Cancel</button>
            <button id="ok" type="submit" uxp-variant="cta">OK</button>
        </footer>
    </form>`;

function createDialog() {
    dialog = document.createElement("dialog");
    dialog.innerHTML = yourHtml;

    const cancelButton = dialog.querySelector("#cancel");
    const platformSelect = dialog.querySelector("#platform");
    const customInput = dialog.querySelector("#custom");

    cancelButton.onclick = () => dialog.close("reasonCanceled");

    platformSelect.onchange = () => {
        customInput.className = "hidden";
        switch (platformSelect.value) {
            case "facebook":
                dialog.querySelector("#width").value = 1200;
                dialog.querySelector("#height").value = 628;
                break;
            case "instagram":
                dialog.querySelector("#width").value = 1080;
                dialog.querySelector("#height").value = 1080;
                break;
            case "pinterest":
                dialog.querySelector("#width").value = 735;
                dialog.querySelector("#height").value = 1102;
                break;
            default:
                customInput.className = "visible";
        }
    }
    document.appendChild(dialog);
}


function createCustomBanner(selection, width, height) {
    commands.duplicate()
    const duplicated = selection.items[0];

    duplicated.resize(width, height);
    duplicated.moveInParentCoordinates(600, 600);
}

function myPluginCommand(selection) {
    if (!dialog) createDialog();
    return dialog.showModal().then(function (result) {
        if (result !== "reasonCanceled") {
            createCustomBanner(
                selection,
                Number(dialog.querySelector("#width").value),
                Number(dialog.querySelector("#height").value)
            );
        }
    });
}

module.exports = {
    commands: {
        myPluginCommand
    }
};
