const h = require("./h")

let dialog;
function getDialog() {
    if (dialog == null) {
        function onsubmit(e) {
            let values = {
                horizontal: horizontal.value,
                vertical: vertical.value
            };
            console.log("submit: " + JSON.stringify(values))
            dialog.close();
        }
        
        let horizontal, vertical;
        dialog =
            h("dialog",
                h("form", { style: { width: 360 }, onsubmit },
                    h("h1", "Button Padding"),
                    h("p", `Enter your button's vertical and horizontal padding and then click "Update Padding".`),
                    h("div", { class: "row" },
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
                        h("button", { uxpVariant: "cta", type:"submit", onclick(e) { onsubmit(); e.preventDefault(); } }, "Update Padding")
                    )
                )
            )
    }
    return dialog;
}

module.exports = {
    commands: {
        menuCommand: function () {
            document.body.appendChild(getDialog()).showModal()
        }
    }
};