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

class CheckBoxDemo {
    render() {
        this._rootNode = this._createContainer();

        const titleBar = createHBox();
        const title =  document.createElement("h2");
        title.textContent = "Checkbox Demo";
        titleBar.appendChild(title);
        this._rootNode.appendChild(titleBar);

        const checkBoxBar = createHBox();
        const checkbox = this._createCheckbox();
        checkBoxBar.appendChild(checkbox);
        const checkBoxText = document.createElement("h3");
        checkBoxText.textContent = "check box";
        checkBoxBar.appendChild(checkBoxText);
        this._rootNode.appendChild(checkBoxBar);


        const checkBoxWithLabelBar = createHBox();
        const checkbox1 = this._createCheckbox();
        const checkBoxText1 = document.createElement("h3");
        checkBoxText1.textContent = "check box with label";
        const label = document.createElement("label");
        Object.assign(label.style, {
                    display: "flex",
                    flexDirection: "row"
                });
        label.appendChild(checkbox1);
        label.appendChild(checkBoxText1);
        checkBoxWithLabelBar.appendChild(label);
        this._rootNode.appendChild(checkBoxWithLabelBar);


        const disabledCheckBoxBar = createHBox();
        const disabledCheckbox = this._createCheckbox();
        disabledCheckbox.setAttribute("disabled", true);
        disabledCheckBoxBar.appendChild(disabledCheckbox);
        const disabledCheckBoxText = document.createElement("h3");
        disabledCheckBoxText.textContent = "disabled check box";
        disabledCheckBoxBar.appendChild(disabledCheckBoxText);
        this._rootNode.appendChild(disabledCheckBoxBar);

        const button = this._createButton("Set Indeterminate", ()=>{
            checkbox.indeterminate = true;
            checkbox1.indeterminate = true;
        });


        checkbox.addEventListener("change", function (){
            checkbox1.checked = checkbox.checked;
        }.bind(this));

        checkbox1.addEventListener("change", function (){
            checkbox.checked = checkbox1.checked;
        }.bind(this));

        this._rootNode.appendChild(button);
        return this._rootNode;
    }

    _createContainer() {
        const topPage = createVBox();
        Object.assign(topPage.style, {
            height: "100%",
            width: "100%",
            overflow: "scroll",
            margin: 15,
            padding: 10
        });
        return topPage;
    }

    _createCheckbox() {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        return checkbox;
    }


    _createButton(title, func) {
        const button = document.createElement("button");
        button.textContent = title;
        button.setAttribute("uxp-variant", "action");
        if (func) {
            button.addEventListener("click", func.bind(this));
        }
        return button;
    }


}

module.exports = CheckBoxDemo;
