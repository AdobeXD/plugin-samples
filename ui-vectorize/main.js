
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
        h("form", { method:"dialog", style: { width: 300 /* height is automatically calculated */ } },
            h("h1", "Vectorize Document"),
            h("p", "This plugin will vectorize your entire project. Are you sure you'd like to continue?"),
            h("footer",
                h("button", { uxpVariant: "primary", onclick(e) { dialog.close() } }, "Cancel"),
                h("button", { uxpVariant: "cta", type:"submit", onclick(e) { dialog.close() } }, "Vectorize")
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