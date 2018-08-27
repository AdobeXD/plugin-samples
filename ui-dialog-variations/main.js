/******************************************************************************
 *
 * Dialog Variations
 * -----------------
 *
 * Author: Kerri Shotts
 *
 ******************************************************************************/

/**
 * Generates a "notice" dialog with the title, default icon, and a series of messages.
 *
 * @param {string} title
 * @param {string} [icon="info-filled"]
 * @param {string[]} msgs
 */
async function notice({title, icon, msgs, prompt, buttons=[{label: "Close", variant: "cta", type:"submit"}]} = {}) {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
<style>
    form {
        width: 360px;
    }
    form h1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    form h1 span {
    }
    form h1 img {
        width: 14px;
        height: 14px;
        flex: 0 0 14px;
    }
</style>
<form method="dialog">
    <h1>
        <span>${title}</span>
        ${icon ? `<img src="assets/${icon}.png" />` : ""}
    </h1>
    ${
        msgs.map(msg => msg.substr(0, 4) === "http" ? `<a href="${msg}">${msg}</a>` : `<p>${msg}</p>`).join("")
    }
    ${
        prompt ?
            `
                <label>
                    <input type="text" id="prompt" placeholder="${prompt}" />
                </label>
            `
        : ""
    }
    <footer>
        ${buttons.map(({label, type, variant} = {}, idx) => `<button id="btn${idx}" type="${type}" uxp-variant="${variant}">${label}</button>`)}
    </footer>
</form>
    `;

    let okButtonIdx = -1;
    let cancelButtonIdx = -1;
    const form = dialog.querySelector("form");
    form.onsubmit = () => dialog.close({which: okButtonIdx, value: prompt ? dialog.querySelector("#prompt").value : ""});
    buttons.forEach(({label, type, variant} = {}, idx) => {
        const button = dialog.querySelector(`#btn${idx}`);
        if (type === "submit" || variant === "cta") {
            okButtonIdx = idx;
        }
        if (type === "reset") {
            cancelButtonIdx = idx;
        }
        button.onclick = e => {
            e.preventDefault();
            dialog.close({which: idx, value: prompt ? dialog.querySelector("#prompt").value : ""});
        }
    });

    try {
        document.appendChild(dialog);
        return await dialog.showModal();
    } catch(err) {
        return {which: cancelButtonIdx, value: ""};
    } finally {
        dialog.remove();
    }
}

/**
 * Generates an alert message
 *
 * @param {string} title
 * @param {string[]} msgs
 */
async function alert(title, ...msgs) {
    return notice({title, msgs});
}

/**
 * Generates a warning message
 *
 * @param {*} title
 * @param {*} msgs
 */
async function error(title, ...msgs) {
    return notice({title, icon: "alert-red", msgs});
}

async function confirm(title, msg, buttons = [ "Cancel", "OK" ]) {
    return notice({title, msgs: [msg], buttons: [
        {label: buttons[0], type:"reset", variant: "primary"},
        {label: buttons[1], type:"submit", variant: "cta"}
    ]});
}

async function warning(title, msg, buttons = [ "Cancel", "OK" ]) {
    return notice({title, msgs: [msg], buttons: [
        {label: buttons[0], type:"submit", variant: "primary"},
        {label: buttons[1], type:"button", variant: "warning"}
    ]});
}

async function prompt(title, msg, prompt, buttons = [ "Cancel", "OK" ]) {
    return notice({title, msgs: [msg], prompt, buttons: [
        {label: buttons[0], type:"reset", variant: "primary"},
        {label: buttons[1], type:"submit", variant: "cta"}
    ]});
}

function about() {
}

async function showAlert() {
    return alert("Connect to the Internet",
                 "In order to function correctly, this plugin requires Internet access. Please connect to a network that has Internet access.");
}

async function showConfirm() {
    const feedback = await confirm("Enable Smart Filters?",
                   "Smart filters are nondestructive and will preserve your original images.",
                ["Cancel", "Enable"]);
    switch (feedback.which) {
        case 0:
            return alert("Smart Filters", "You clicked 'Cancel'");
            break;
        case 1:
            return alert("Smart Filters Enabled", "You clicked 'Enable'");
            break;
    }
}

async function showPrompt() {
    const res = await prompt("Create Shape", "What kind of shape you would like to create?", "Shape");
    switch (res.which) {
        case 0:
            return alert("Shape to Create", "You didn't want to apply a shape.");
            break;
        case 1:
            return alert("Shape to Create", `You wanted to create a ${res.value}!`);
            break;
    }
}

async function showWarning() {
    const res = await warning("Reset Preferences?",
                 "Are you sure you want to reset your plugin preferences?", ["Cancel", "Reset Preferences"]);
    switch (res.which) {
        case 0:
            return alert("Preferences Preserved", "Your preferences are safe.");
            break;
        case 1:
            return alert("Preferences Reset", `Your preferences have been reset.`);
            break;
    }

}

async function showError() {
    return error("Couldn't save your changes",
        "Your computer reports that you are out of storage space. Please move or remove some files to free up space and try again.");
}

async function showAbout() {
    return alert("About Dialog Variations",
        "Dialog variations shows several different standard dialog templates for alerts, confirmations, prompts, and more.",
        "For more information, please see:",
        "https://github.com/AdobeXD/Plugin-Samples/tree/master/ui-dialog-variations"
    );
}

module.exports = {
    commands: {
        showAlert,
        showWarning,
        showError,
        showConfirm,
        showPrompt,
        showAbout
    }
}
