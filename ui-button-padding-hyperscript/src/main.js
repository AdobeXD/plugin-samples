const h = require("hyperscript")

function onsubmit(e) {
    let values = {
        horizontal: horizontal.value,
        vertical: vertical.value
    };
    console.log("submit: " + JSON.stringify(values));
    dialog.close();
}

let horizontal, vertical;
let dialog =
    h("dialog",
        "Hello Hyperscript",
        h("form", { style: { width: "360px" }, onsubmit },
            h("h1", "Button Padding"),
            h("p", `Enter your button's vertical and horizontal padding and then click "Update Padding".`),
            h("div.row",
                h("label",
                    h("span", "Horizontal"),
                    horizontal = h("input", { value: "20px" })
                ),
                h("label",
                    h("span", "Vertical"),
                    vertical = h("input", { value: "20px" })
                )
            ),
            h("footer",
                h("button", { uxpVariant: "primary", onclick(e) { dialog.close("Cancelled") } }, "Cancel"),
                h("button", { type:"submit", uxpVariant: "cta", onclick(e) { onsubmit(e); e.preventDefault(); } }, "Update Padding")
            )
        )
    )
document.body.appendChild(dialog);

module.exports = {
    commands: {
        menuCommand: function () {
            dialog.showModal().then(reason => {
                console.log("REASON: " + reason);
            });
        }
    }
};