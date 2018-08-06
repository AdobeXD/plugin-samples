const h = require("hyperscript")

let dialog;
function getDialog() {
    if (dialog == null) {
        function onsubmit(e) {
            let values = {
                horizontal: horizontal.value,
                vertical: vertical.value
            };
            console.log("submit: " + JSON.stringify(values));
            dialog.close();
        }
        
        let horizontal, vertical;
        dialog =
            h("dialog",
                h("form", { onsubmit },
                    h("h1", "Button Padding"),
                    h("p", `Enter padding values and then click "Update Padding".`),
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
        // temporary work-around since styles don't currently work with hyperscript due to lack of CSSStyleDeclaration.prototype.setProperty function.
        dialog.style.width = 350;
    }
    return dialog
}

module.exports = {
    commands: {
        menuCommand: function () {
            document.body.appendChild(getDialog()).showModal()
        }
    }
};