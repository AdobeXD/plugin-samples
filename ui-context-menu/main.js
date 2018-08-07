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

        function menuAction1() { console.log("Action 1 Clicked") }
        function menuAction2() { console.log("Action 2 Clicked") }
        function menuAction3() { console.log("Action 3 Clicked") }
        let popupMenu = (
            h("menu", { style: { width: 200 } },
                h("menuitem", { onclick: menuAction1, label: "Action" }),
                h("menuitem", { onclick: menuAction2, label: "Another Action" }),
                h("hr"), // not showing up yet, may need to add to internal stylesheet
                h("menuitem", { onclick: menuAction3, label: "Separated Action" })
            )
        );

        function showContextMenu(e) {
            console.log("showContextMenu", JSON.stringify({ x: e.clientX, y: e.clientY, buttons: e.buttons }));
            //  no error when menu is not in the dom
            popupMenu.popupAt(e.clientX, e.clientY);
        }
    
        let horizontal, vertical;
        dialog = (
            h("dialog",
                h("form", { style: { width: 360 }, onsubmit },
                    h("h1", "Context Menus"),
                    h("p", { onclick: showContextMenu }, "Click here for a context menu."),
                    h("footer",
                        h("button", { uxpVariant: "primary", onclick(e) { dialog.close("Cancelled") } }, "Cancel"),
                        h("button", { uxpVariant: "cta", type:"submit", onclick(e) { onsubmit(); e.preventDefault(); } }, "Update Padding")
                    )
                ),
                //  the menu MUST be added to the DOM before usage.
                popupMenu
            )
        );
    }
    return dialog;
}

module.exports = {
    commands: {
        menuCommand() {
            document.body.appendChild(getDialog()).showModal()
        },
        anotherMenuCommand() {
            document.body.appendChild(getDialog()).showModal()
        }
    }
};