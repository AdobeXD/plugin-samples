
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

const lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui rutrum, congue velit a, auctor nulla. Aenean lacinia."
const lorem2 = "Aenean lacinia, leo quis tempus dapibus, sapien lacus efficitur mauris, et tristique eros tortor et mauris. Vivamus nec tellus condimentum, fermentum enim eget, eleifend velit."
const lorem3 = "Ut volutpat nulla ac egestas lobortis. Leo quis tempus dapibus."

let dialog =
    h("dialog",
        h("form", { method:"dialog", style: { width: 400 } },
            h("h1", "H1 Heading, Large Rule, Large Paragraph"),
            h("hr", { class:"large" } ),
            h("p", { class:"large", style:{ lineHeight: 20 }}, lorem1),
            h("p", { class:"large"}, lorem3),
            h("h2", "H2 Heading, Normal Rule, Normal Paragraph"),
            h("hr"),
            h("p", lorem1),
            h("p", lorem3),
            h("h3", "H3 Heading, Small Rule, Small Paragraph"),
            h("hr", { class:"small" } ),
            h("p", { class:"small"}, lorem1),
            h("p", { class:"small"}, lorem3),
            h("footer",
                h("button", { uxpVariant: "primary", onclick(e) { dialog.close() } }, "Cancel"),
                h("button", { uxpVariant: "cta", onclick(e) { dialog.close() } }, "Submit")
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