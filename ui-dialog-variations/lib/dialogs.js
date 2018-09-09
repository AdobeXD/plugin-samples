const {getManifest, getNearestIcon} = require('./manifest.js');

let manifest;

/**
 * Converts a string (or an array of strings or other objects) to a nicer HTML
 * representation. Essentially this is a _very_ basic markdown parser.
 *
 * The following tokens are understood, when encountered at the beginning of
 * a string:
 *
 * Token        | Result
 * -------------|-----------------------
 * `##`         | `<h2>`
 * `###`        | `<h3>`
 * `* `         | Bulleted list
 * `----`       | `<hr class="small">`
 * `---`        | `<hr />`
 * `[...](href)`| `<p><a href="href">...</a></p>`
 *
 * @param {string | string[] | * | Array<*>} str
 * @returns {string} the HTML representation
 */
function strToHtml(str) {
    // allow some common overloads, including arrays and non-strings
    if (Array.isArray(str)) {
        return str.map(str => strToHtml(str)).join('');
    }
    if (typeof str !== 'string') {
        return strToHtml(`${str}`);
    }

    let html = str;

    // handle some markdown stuff
    if (html.substr(0, 2) === '##') {
        html = `<h3>${html.substr(2).trim().toUpperCase()}</h3>`;
    } else if (html.substr(0, 1) === '#') {
        html = `<h2>${html.substr(1).trim()}</h2>`;
    } else if (html.substr(0, 2) === '* ') {
        html = `<p class="list"><span class="bullet margin">•</span><span class="margin">${html.substr(2).trim()}</span></p>`;
    } else if (html.substr(0, 4) === '----') {
        html = `<hr class="small"/>${html.substr(5).trim()}`;
    } else if (html.substr(0, 3) === '---') {
        html = `<hr/>${html.substr(4).trim()}`;
    } else {
        html = `<p>${html.trim()}</p>`;
    }

    // handle links -- the catch here is that the link will transform the entire paragraph!
    const regex = /\[([^\]]*)\]\(([^\)]*)\)/;
    const matches = str.match(regex);
    if (matches) {
        const title = matches[1];
        const url = matches[2];
        html = `<p><a href="${url}">${html.replace(regex, title).replace(/\<\|?p\>/g, '')}</a></p>`;
    }

    return html;
}

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
async function createDialog({
    title,
    icon = 'plugin-icon',
    msgs,
    prompt,
    render,
    isError=false,
    buttons=[
        {label: 'Close', variant: 'cta', type:'submit'}
    ]} = {},
    width=360,
    height='auto',
    iconSize=18
) {

    let messages = Array.isArray(msgs) ? msgs : [ msgs ];

    try {
        if (!manifest) {
            manifest = await getManifest();
        }
    } catch (err) {
        // do nothing
    }

    let usingPluginIcon = false;
    if (icon === 'plugin-icon') {
        if (manifest.icons) {
            usingPluginIcon = true;
            iconSize = 24;
            icon = getNearestIcon(manifest, iconSize);
        }
    }

    const dialog = document.createElement('dialog');
    dialog.innerHTML = `
<style>
    form {
        width: ${width}px;
    }
    .h1 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        ${isError ? 'color: #D7373F;' : ''}

    }
    .h1 img {
        width: ${iconSize}px;
        height: ${iconSize}px;
        flex: 0 0 ${iconSize}px;
        padding: 0;
        margin: 0;
    }
    img.plugin-icon {
        border-radius: 4px;
        overflow: hidden;
    }
    .list {
        display: flex;
        flex-direction: row;
    }
    .list .margin {
        margin-bottom: 0;
        margin-left: 0;
    }
    .list span {
        flex: 0 0 auto;
    }
    .list .bullet {
        text-align: center;
    }
    .list + .list {
        margin-top: 0;
    }

    .container {
        overflow-x: hidden;
        overflow-y: auto;
        height: ${height === 'auto' ? height : `${height}px`};
    }
</style>
<form method="dialog">
    <h1 class="h1">
        <span>${title}</span>
        ${icon ? `<img ${usingPluginIcon ? `class="plugin-icon" title="${manifest.name}"` : ''} src="${icon}" />` : ''}
    </h1>
    <hr />
    <div class="container">
        ${
            render ? render() : (
                messages.map(msg => strToHtml(msg)).join('') +
                (prompt ? `<label><input type="text" id="prompt" placeholder="${prompt}" /></label>` : '')
            )
        }
    </div>
    <footer>
        ${buttons.map(({label, type, variant} = {}, idx) => `<button id="btn${idx}" type="${type}" uxp-variant="${variant}">${label}</button>`).join('')}
    </footer>
</form>
    `;

    // The "ok" and "cancel" button indices. OK buttons are "submit" or "cta" buttons. Cancel buttons are "reset" buttons.
    let okButtonIdx = -1;
    let cancelButtonIdx = -1;
    let clickedButtonIdx = -1;

    // Ensure that the form can submit when the user presses ENTER (we trigger the OK button here)
    const form = dialog.querySelector('form');
    form.onsubmit = () => dialog.close('ok');

    // Attach button event handlers and set ok and cancel indices
    buttons.forEach(({type, variant} = {}, idx) => {
        const button = dialog.querySelector(`#btn${idx}`);
        if (type === 'submit' || variant === 'cta') {
            okButtonIdx = idx;
        }
        if (type === 'reset') {
            cancelButtonIdx = idx;
        }
        button.onclick = e => {
            e.preventDefault();
            clickedButtonIdx = idx;
            dialog.close( idx === cancelButtonIdx ? 'reasonCanceled' : 'ok');
        }
    });

    try {
        document.appendChild(dialog);
        const response = await dialog.showModal();
        console.log(response);
        if (response === 'reasonCanceled') {
            // user hit ESC
            return {which: cancelButtonIdx, value: ''};
        } else {
            return {which: clickedButtonIdx, value: prompt ? dialog.querySelector('#prompt').value : ''};
        }
    } catch(err) {
        // system refused the dialog
        return {which: cancelButtonIdx, value: ''};
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
    return createDialog({title, msgs});
}

/**
 * Generates a warning message
 *
 * @param {*} title
 * @param {*} msgs
 */
async function error(title, ...msgs) {
    return createDialog({title, isError: true, msgs});
}

async function confirm(title, msg, buttons = [ 'Cancel', 'OK' ]) {
    return createDialog({title, msgs: [msg], buttons: [
        {label: buttons[0], type:'reset', variant: 'primary'},
        {label: buttons[1], type:'submit', variant: 'cta'}
    ]});
}

async function warning(title, msg, buttons = [ 'Cancel', 'OK' ]) {
    return createDialog({title, msgs: [msg], buttons: [
        {label: buttons[0], type:'submit', variant: 'primary'},
        {label: buttons[1], type:'button', variant: 'warning'}
    ]});
}

async function prompt(title, msg, prompt, buttons = [ 'Cancel', 'OK' ]) {
    return createDialog({title, msgs: [msg], prompt, buttons: [
        {label: buttons[0], type:'reset', variant: 'primary'},
        {label: buttons[1], type:'submit', variant: 'cta'}
    ]});
}

module.exports = {
    createDialog,
    alert,
    error,
    confirm,
    warning,
    prompt
};