const React = require("react");
const ReactDOM = require("react-dom");
//const { selection } = require("scenegraph");

class PanelController {
    constructor(renderFn) {
        this.renderFn = renderFn;
        this.instance = null;
        this.rootNode = document.createElement("div");

        this.rootNode.style.height="450px";
        this.rootNode.className = "panel";
        this.attachment = null;

        ["show", "hide", "update"].forEach(fn => this[fn] = this[fn].bind(this));
    }

    show(event) {
        this.attachment = event.node;
        this.attachment.appendChild(this.rootNode);

        if (!this.instance) {
            this.instance = ReactDOM.render(this.renderFn(), this.rootNode);
        }

        this.update();
    }

    hide(event) {
        this.attachment.removeChild(this.rootNode);
    }

    update() {
        if (this.instance.documentStateChanged) {
            this.instance.documentStateChanged();
        }
    }
}

module.exports = PanelController;