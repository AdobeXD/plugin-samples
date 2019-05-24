require ("./reactShim");
const React = require("react");
const ReactDOM = require("react-dom");

const App = require("./App");
const PanelController = require("./PanelController");

let html = `<h1>Template</h1>
<hr />
<p>Hello World!</p>
<footer>
     <button uxp-variant="cta">Close</button>
</footer>`;

function htmlChanged(newhtml) {
    html = newhtml;
}

let dialog, runDialog;
function getDialog(selection) {
    if (dialog == null) {
        dialog = document.createElement("dialog");
        ReactDOM.render(<App dialog={dialog} html={html} selection={selection} onChange={htmlChanged}/>, dialog);
    }
    return dialog;
}

function getRunDialog(selection) {
    if (runDialog == null) {
        runDialog = document.createElement("dialog");
    }
    runDialog.innerHTML = `
<style>
    .form {
        min-width: 300px;
    }
</style>
<form class="form" method="dialog">
${html}
</form>
`;
    return runDialog;
}

const entryPoints = module.exports = {
    commands: {
        editPlayground: (selection) => {
            return document.appendChild(getDialog(selection)).showModal();
        },
        runPlayground: (selection) => {
            return document.appendChild(getRunDialog(selection)).showModal();
        },
    },
    panels: {
        editUxpPen: new PanelController(() => <App html={html} onChange={htmlChanged} onSubmit={entryPoints.runPlayground}/>),
        viewUxpPen: {
            show(event) {
                event.node.innerHTML = `<div class="panel">${html}</div>`;
            },
            hide(event) {
                event.node.innerHTML = '';
            }
        }
    }
};