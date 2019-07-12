let React = require("react");
let ReactDOM = require("react-dom");
let MainForm = require("./MainForm.jsx");

let dialog;
function getDialog() {
    if (dialog == null) {
        dialog = document.createElement("dialog");
        ReactDOM.render(<MainForm dialog={dialog} />, dialog);
    }
    return dialog
}

module.exports = {
    commands: {
        menuCommand: function () {
            document.body.appendChild(getDialog()).showModal();
        }
    }
};