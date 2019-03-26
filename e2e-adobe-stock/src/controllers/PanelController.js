const React = require("react");
const ReactDOM = require("react-dom");
const { selection } = require("scenegraph");

class PanelController {
    constructor(App) {
        this.App = App;
        this.instance = null;
        this.rootNode = document.createElement("div");
        this.rootNode.style.margin="-14px";
        this.attachment = null;

        ["show", "hide", "update"].forEach(fn => this[fn] = this[fn].bind(this));
    }

    show(event) {
        const App = this.App;

        this.attachment = event.node;
        this.attachment.appendChild(this.rootNode);

        if (!this.instance) {
            this.instance = ReactDOM.render(<App selection={selection} />, this.rootNode);
        }

        this.update();
    }

    hide(event) {
        this.attachment.removeChild(this.rootNode);
    }

    update() {
        if (this.instance.documentStateChanged) {
            this.instance.documentStateChanged(selection);
        }
    }
}

module.exports = PanelController;