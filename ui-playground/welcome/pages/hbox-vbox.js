/*
 *  Copyright 2018 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 *
 */

const factories = {
    button: () => {
        var el = document.createElement("button");
        el.textContent = "Button title";
        return el;
    },
    textInput: () => {
        var el = document.createElement("input");
        el.type = "text";
        return el;
    },
    checkbox: () => {
        var el = document.createElement("input");
        el.type = "checkbox";
        return el;
    },
};

function createHBox() {
    var div = document.createElement("div");
    Object.assign(div.style, {
        display: "flex",
        flexDirection: "row",
    });
    return div;
}

function createVBox() {
    var div = document.createElement("div");
    Object.assign(div.style, {
        display: "flex",
        flexDirection: "column",
    });
    return div;
}

class TextFieldDemo {
    render() {
        this._rootNode = this._createContainer();

        this._rootNode.appendChild(this._createHeader());
        this._rootNode.appendChild(this._createContent());

        this._dropdown.value = "button";
        this._resetContent();

        return this._rootNode;
    }

    _createContainer() {
        const topPage = createVBox();
        Object.assign(topPage.style, {
            height: "100%",
            width: "100%",
            overflow: "scroll"
        });
        return topPage;
    }

    get selectedType() {
        return this._dropdown.value;
    }

    _createHeader() {
        const header = createVBox();

        const title = document.createElement("h2");
        title.textContent = "Select the element to test and click test";
        header.appendChild(title);

        const elementsDropdown = this._dropdown = document.createElement("select");
        header.appendChild(elementsDropdown);

        const hboxCount = this._hboxCount = document.createElement("input");
        hboxCount.type = "text";
        hboxCount.value = "10";
        header.appendChild(hboxCount);

        const vboxCount = this._vboxCount = document.createElement("input");
        vboxCount.type = "text";
        vboxCount.value = "20";
        header.appendChild(vboxCount);

        const div = createHBox();
        const span = document.createElement("span");
        span.textContent = "Shrink / Grow content";
        const stretch = this._stretch = document.createElement("input");
        stretch.type = "checkbox";
        div.appendChild(stretch);
        div.appendChild(span);
        header.appendChild(div);

        const testBtn = document.createElement("button");
        testBtn.textContent = "Test";
        header.appendChild(testBtn);

        testBtn.addEventListener("click", (ev) => {
            this._resetContent();
        });

        Object.keys(factories).forEach((name) => {
            let option = document.createElement("option");
            option.value = name;
            option.textContent = name;
            elementsDropdown.appendChild(option);
        });

        return header;
    }

    _createContent() {
        const content = createVBox();
        Object.assign(content.style, {
            flexGrow: 1,
        });

        content.appendChild(this._createHBox());
        content.appendChild(this._createVBox());
        return content;
    }

    _createVBox() {
        const box = this._vbox = createVBox();
        Object.assign(box.style, {
            border: "2px solid black",
            flexGrow: 1,
            margin: "2px",
        });
        return box;
    }

    _createHBox() {
        const box = this._hbox = createHBox();
        Object.assign(box.style, {
            height: "100px",
            border: "2px solid black",
            margin: "2px",
        });
        return box;
    }

    _resetContent() {
        while(this._vbox.firstChild) {
            this._vbox.removeChild(this._vbox.firstChild);
        }
        while(this._hbox.firstChild) {
            this._hbox.removeChild(this._hbox.firstChild);
        }

        let type = this.selectedType;
        let max = this._hboxCount.value || 10;
        for (let i = 0; i < max; i++) {
            this._hbox.appendChild(this._createHBoxChild(factories[type]));
        }

        max = this._vboxCount.value || 10;
        for (let i = 0; i < max; i++) {
            this._vbox.appendChild(this._createVBoxChild(factories[type]));
        }
    }

    _createHBoxChild(factory) {
        const node = factory();
        node.style.flexGrow = this._stretch.checked ? 1 : 0;
        node.style.flexShrink = this._stretch.checked ? 1 : 0;
        return node;
    }

    _createVBoxChild(factory) {
        const node = factory();
        node.style.flexGrow = this._stretch.checked ? 1 : 0;
        node.style.flexShrink = this._stretch.checked ? 1 : 0;
        return node;
    }
}

module.exports = TextFieldDemo;
