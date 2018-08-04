
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
let dialog =
    h("dialog",
        h("form", { method:"dialog", style: { width: 400 } },
            h("h1", "Simple Form"),
            h("p", "This plugin will vectorize your entire project. Are you sure you'd like to continue?"),
            h("label",
                h("span", "Input Type Text"),
                h("input")
            ),
            h("label",
                h("span", "Text Area rows=6, Bug: Should be 6 rows high."),
                h("textarea", { style: { height: 100 } } )
            ),
            h("label",
                h("span", "Select"),
                h("select",
                    ...["A","B","C","D","E","F","G"].map( name => h("option", `Option ${name}`) )
                )
            ),
            h("label", { style: { flexDirection: "row", alignItems: "center" }},
                h("input", { type: "checkbox" }),
                h("span", "Input Type Checkbox?")
            ),
            h("label",
                h("span", "Input Type Range"),
                h("input", { type: "range" })
            ),
            h("footer",
                h("button", { onclick(e) { dialog.close() } }, "Cancel"),
                h("button", { onclick(e) { dialog.close() } }, "Submit")
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