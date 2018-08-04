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

class DropdownDemo {
    render() {
        this._rootNode = this._createContainer();

        let row1 = this._createRow1();
        this._rootNode.appendChild(row1);

        let row2 = this._createRow2();
        this._rootNode.appendChild(row2);

        let row3 = this._createRow3();
        this._rootNode.appendChild(row3);

        return this._rootNode;
    }

    _createContainer() {
        const topPage = document.createElement("div");
        Object.assign(topPage.style, {
            display: "flex",
            height: "100%",
            width: "100%",
            padding: 30,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            overflow: "hidden"
        });
        return topPage;
    }

    _createRowContainer() {
        const r = document.createElement("div");
        Object.assign(r.style, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
        });
        return r;
    }

    _createColumnContainer() {
        const c = document.createElement("div");
        Object.assign(c.style, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        });
        return c;
    }

    _createLabel(text) {
        const label = document.createElement("span");
        Object.assign(label.style, {
            margin: 5
        });
        label.textContent = text;
        return label;
    }

    _createSlider (min, max, value) {
        const slider = document.createElement("input");
        Object.assign(slider.style, {
            margin: 5,
            minWidth: 150,
            type: "range",
            min: min,
            max: max,
            value: value
        });
        return slider;
    }

    _createSelect () {
        const select = document.createElement("select");
        Object.assign(select.style, {
            margin: 5
        });

        const op1 = document.createElement("option");
        op1.value = "Option 1";
        op1.textContent = "Option 1";
        select.appendChild(op1);
        select.value = "Option 1";

        const op2 = document.createElement("option");
        op2.value = "Option 2";
        op2.textContent = "Option 2";
        select.appendChild(op2);

        const op3 = document.createElement("option");
        op3.value = "Option 3";
        op3.textContent = "Option 3";
        select.appendChild(op3);

        const op4 = document.createElement("option");
        op4.value = "Option 4";
        op4.textContent = "Option 4";
        select.appendChild(op4);

        return select;
    }

    _createRow1() {
        const row1 = this._createRowContainer();

        row1.appendChild(this._createLabel("Normal: "));
        this._select1 = this._createSelect();
        this._select1.addEventListener("change", (ev) => {
            this._selected1.textContent = "Selected: " + this._select1.value;
        });
        row1.appendChild(this._select1);

        row1.appendChild(this._createLabel("Quiet: "));
        this._select2 = this._createSelect();
        this._select2.setAttribute("uxpQuiet", true);
        this._select2.addEventListener("change", (ev) => {
            this._selected1.textContent = "Selected: " + this._select2.value;
        });
        row1.appendChild(this._select2);

        this._selected1 = this._createLabel("Selected: " + this._select1.value);
        row1.appendChild(this._selected1);

        const disablCheckLabel = this._createLabel("  Disable: ");
        row1.appendChild(disablCheckLabel);

        this._disabledCheck = document.createElement("input");
        this._disabledCheck.style.type = "checkbox";
        this._disabledCheck.addEventListener("change", (ev) => {
            this._select1.disabled = this._disabledCheck.checked;
            this._select2.disabled = this._disabledCheck.checked;
        });
        row1.appendChild(this._disabledCheck);


        return row1;
    }

    _createButton(text) {
        const button = document.createElement("button");
        Object.assign(button.style, {
            margin: 5
        });
        button.setAttribute("uxp-variant", "action");
        button.textContent = text;
        return button;
    }

    _createRow2() {
        const row2 = this._createRowContainer();

        let child = this._select1.firstChild;
        while (child) {
            const button = this._createButton(child.textContent);
            button.style.title = "Click this button to select " + child.textContent;
            button.addEventListener("click", (ev) => {
                this._select1.value = button.textContent;
                this._select2.value = button.textContent;
                this._selected1.textContent = "Selected: " + this._select1.value;
            });
            row2.appendChild(button);
            child = child.nextSibling;
        }

        return row2;
    }

    _createRow3() {
        const row3 = this._createRowContainer();

        row3.appendChild(this._createLabel("The buttons above have tooltips."))

        return row3;
    }
}

module.exports = DropdownDemo;
