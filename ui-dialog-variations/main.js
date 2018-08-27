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
                    <span>${prompt}</span>
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
async function warning(title, ...msgs) {
    return notice({title, icon: "alert-red", msgs});
}

async function confirm(title, msg, buttons = [ "Cancel", "OK" ]) {
    return notice({title, msgs: [msg], buttons: [
        {label: buttons[0], type:"reset", variant: "primary"},
        {label: buttons[1], type:"submit", variant: "cta"}
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
    return alert("Uploaded successfully!",
                 "Your changes were uploaded successfully.");
}

async function showConfirm() {
    const feedback = await confirm("Ask for design feedback?",
                   "Indicate if you want this plugin to provide you with design feedback.",
                ["I'm a coward", "Bring it on"]);
    switch (feedback.which) {
        case 0:
            return alert("Awwww!", "I was going to say nice things. Honest!")
        case 1:
            return alert("You asked for it...", "I think it's wonderful!");
            break;
    }
}

async function showPrompt() {
    const res = await prompt("What's your name?", "I'm a friendly plugin. I'd like to get to know you!", "Name");
    switch (res.which) {
        case 0:
            return alert("Awwww.", "Oh well. Maybe another day");
            break;
        case 1:
            return alert("Nice to meet you", `I'm happy to meet you, ${res.value}!`);
            break;
    }
}

async function showError() {
    return warning("Couldn't divide by zero",
        "An attempt was made to divide by zero. Unfortunately, that operation is undefined.");
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
        showError,
        showConfirm,
        showPrompt,
        showAbout
    }
}
