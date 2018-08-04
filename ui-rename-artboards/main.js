
/**
* Shorthand for creating Elements.
* @param {*} tag The tag name of the element.
* @param {*} [props] Optional props.
* @param {*} children Child elements or strings
*/
function h(tag, props, ...children) {
    let element = document.createElement(tag);
    if (props) {
        if (props.nodeType || typeof props !== "object") {
            children.unshift(props);
        }
        else {
            for (let name in props) {
                let value = props[name];
                if (name == "style") {
                    Object.assign(element.style, value);
                }
                else {
                    element.setAttribute(name, value);
                    element[name] = value;
                }
            }
        }
    }
    for (let child of children) {
        element.appendChild(typeof child === "object" ? child : document.createTextNode(child));
    }
    return element;
}

function onsubmit() {
    let values = {
        renameTo: renameTo.value,
        startAt: startAt.options[Math.max(0, startAt.selectedIndex)].value,
        format: format.options[Math.max(0, format.selectedIndex)].value,
        reverse: reverse.checked
    }
    console.log("rename_artboards.onsubmit: " + JSON.stringify(values));
    //  dialog is automatically closed after submit unless you call e.preventDefault()
}
let renameTo, startAt, format, reverse;

let labelWidth = 75;
let dialog =
    h("dialog",
        h("form", { method:"dialog", style: { width: 380 }, onsubmit },
            h("h1", "Rename Selected Artboards"),
            h("label", { class: "row" },
                h("span", { style: { width: labelWidth } }, "Rename to"),
                renameTo = h("input", { uxpQuiet: true, style:{ flex: "1" } })
            ),
            h("label", { class: "row" },
                h("span", { style: { width: labelWidth } }, "Start at"),
                startAt = h("select", { uxpQuiet: true },
                    ...[1,2,3,4,5].map(i => h("option", { value:i }, i))
                )
            ),
            h("label", { class: "row" },
                h("span", { style: { width: labelWidth } }, "Format"),
                format = h("select", { uxpQuiet: true },
                    h("option", { selected: true, value: "1" }, "1,2,3"),
                    h("option", { value: "A" }, "A,B,C"),
                    h("option", { value: "I" }, "I,II,III")
                )
            ),
            h("label", { class: "row" },
                reverse = h("input", { type: "checkbox", checked: true }),
                h("span", "Reverse order")
            ),
            h("footer",
                h("button", { uxpVariant: "primary", onclick(e) { dialog.close() } }, "Cancel"),
                h("button", { uxpVariant: "cta", type: "submit" }, "Rename")
            )
        )
    )
document.body.appendChild(dialog);

module.exports = {
    commands: {
        menuCommand: function () {
            dialog.showModal();
        }
    }
};