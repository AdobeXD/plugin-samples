
const h = require("./h");

let dialog;
function getDialog() {
    if (dialog == null) {
        dialog =
            h("dialog",
                h("form", { style: { width: 290 } },
                    h("h1", "Hello!"),
                    h("p", "This is a sample modal dialog in Adobe XD."),
                    h("footer",
                        h("button", { uxpVariant:"primary", onclick() { dialog.close() } }, "Cancel"),
                        h("button", { uxpVariant:"cta", type:"submit", onclick() { dialog.close() } }, "Ok")
                    )
                )
            )
    }
    return dialog;
}

module.exports = {
    commands: {
        menuCommand() {
            document.body.appendChild(getDialog()).showModal();
        }
    }
};