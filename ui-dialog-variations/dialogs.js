/*
 * Generates a "notice" dialog with the title, default icon, and a series of messages.
 *
 * @param {*} param
 * @property {string} param.title The dialog title
 * @property {string} [param.icon] The dialog icon to use. If not provided, no icon will be rendered
 * @property {string[]} param.msgs The messages to render. If a message starts with `http`, it will be rendered as a link.
 * @property {string} [param.prompt] If specified, will render as a prompt with a single input field and the prompt as a placeholder
 * @property {boolean} [param.isError=false] If specified, will render the header in a red color
 * @property {Object[]} [buttons] Indicates the buttons to render. If none are specified, a `Close` button is rendered.
 * @returns {Promise} Resolves to an object of the form {which, value}. `value` only makes sense if `prompt` is set. `which` indicates which button was pressed.
 */
async function notice({
    title,
    icon = "app-icon",
    msgs,
    prompt,
    isError=false,
    buttons=[
        {label: "Close", variant: "cta", type:"submit"}
    ]} = {},
    width=360,
    iconSize=14
) {

    if (icon === 'app-icon') {
        try {
            const fs = require("uxp").storage.localFileSystem;
            const dataFolder = await fs.getPluginFolder();
            const manifestFile = await dataFolder.getEntry("manifest.json");
            if (manifestFile) {
                const json = await manifestFile.read();
                const manifest = JSON.parse(json);
                const iconName = manifest.icon;
                if (iconName) {
                    icon = iconName;
                    iconSize = 32;
                }
            }
        } catch (err) {
            // do nothing
        }
    }

    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
<style>
    form {
        width: ${width}px;
    }
    form h1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        ${isError ? 'color: #D7373F' : ''}
    }
    form h1 img {
        width: ${iconSize}px;
        height: ${iconSize}px;
        flex: 0 0 ${iconSize}px;
    }
</style>
<form method="dialog">
    <h1>
        <span>${title}</span>
        ${icon ? `<img src="${icon}" />` : ""}
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
    return notice({title, isError: true, icon: "assets/alert-red.png", msgs});
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

module.exports = {
    notice,
    alert,
    error,
    confirm,
    warning,
    prompt
};