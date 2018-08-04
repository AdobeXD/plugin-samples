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

class TextFieldDemo {
    render() {
        this._rootNode = this._createContainer();

        let standardTextFieldBar = this._createNormalTextField();
        this._rootNode.appendChild(standardTextFieldBar);

        let quietTextFieldBar = this._createQuietTextField();
        this._rootNode.appendChild(quietTextFieldBar);

        this._messageBar = this._createBar();
        this._messageBar.textContent = `Waiting for event...`;
        this._rootNode.appendChild(this._messageBar);

        this._rootNode.appendChild(this._createDisableCheck());

        return this._rootNode;
    }

    _createContainer() {
        const topPage = document.createElement("div");
        Object.assign(topPage.style, {
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        });
        return topPage;
    }

    _createBar() {
        const bar = document.createElement("div");
        Object.assign(bar.style, {
            display: "flex",
            width: "100%",
            marginTop: "20",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
        });
        return bar;
    }

    _createNormalTextField() {
        const textFieldBar = this._createBar();
        this._normalTextField = this._createTextField(false);
        textFieldBar.appendChild(this._normalTextField);
        return textFieldBar;
    }

    _createQuietTextField() {
        const textFieldBar = this._createBar();
        this._quietTextField = this._createTextField(true);
        textFieldBar.appendChild(this._quietTextField);
        return textFieldBar;
    }

    _createTextField(uxpQuiet) {
        const textField = document.createElement("input");
        textField.setAttribute("type", "text");
        Object.assign(textField.style, {
            width: "300",
            fontFamily: "system-ui"
        });
        textField.setAttribute("placeholder", uxpQuiet ? "uxpQuiet textField..." : "standard textField...");
        textField.setAttribute("uxpQuiet", uxpQuiet);

        textField.addEventListener("change", this._handleTextFieldEvent.bind(this));
        textField.addEventListener("input", this._handleTextFieldEvent.bind(this));

        return textField;
    }

    _handleTextFieldEvent(ev) {
        this._messageBar.textContent = "Received event (" + ev.type + " : " + ev.target.value + " )";
    }

    _createDisableCheck() {
        const bar = this._createBar();
        bar.style.marginTop = 5;

        const label = document.createElement("span");
        label.style.margin = 5;
        label.textContent = "Read only: ";
        bar.appendChild(label);

        this._disabledCheck = document.createElement("input");
        this._disabledCheck.style.type = "checkbox";
        this._disabledCheck.addEventListener("change", (ev) => {
            this._normalTextField.readOnly = this._disabledCheck.checked;
            this._quietTextField.readOnly = this._disabledCheck.checked;
        });
        bar.appendChild(this._disabledCheck);

        return bar;
    }
}

module.exports = TextFieldDemo;
