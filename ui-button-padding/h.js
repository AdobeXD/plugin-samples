/**
* Shorthand for creating Elements.
* @param {*} tagAndClasses The tag name of the element and optional classes such as "div.myCssClass"
* @param {*} [props] Optional props.
* @param {*} children Child elements or strings
*/
module.exports = function h(tag, props, ...children) {
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