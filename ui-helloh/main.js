
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
        h("form", { style: { width: 290 } },
            h("h1", "Hello!"),
            h("p", "This is a sample modal dialog in Adobe XD."),
            h("footer",
                h("button", { uxpVariant:"primary", onclick() { dialog.close() } }, "Cancel"),
                h("button", { uxpVariant:"cta", type:"submit", onclick() { dialog.close() } }, "Ok")
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