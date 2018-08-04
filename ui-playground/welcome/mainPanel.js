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

const pages = {
    "APIs": "apis",
    "Button Demo": "button",
    "Label Demo": "label",
    "TextField Demo": "textField",
    "Image Demo": "image",
    "Dropdown Demo": "dropdown",
    "Slider Demo": "slider",
    "Hbox/Vbox Demo": "hbox-vbox",
    "CheckBox Demo": "checkbox",
}

module.exports = {
    createMainPanel() {
        Object.assign(document.body.style, {
            width: "100%",
            height: "100%"
        });

        const mainPanel = document.createElement("div");
        Object.assign(mainPanel.style, {
            display: "flex",
            width: "100%",
            height: "100%",
            background: 0xfafafa,
            flexDirection: "row",
            alignItems: "left",
            justifyContent: "left"
        });

        const leftPanel = document.createElement("div");
        Object.assign(leftPanel.style, {
            display: "flex",
            height: "100%",
            minWidth: 150,
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "center"
        });
        mainPanel.appendChild(leftPanel);

        const divider = document.createElement("div");
        Object.assign(divider.style, {
            display: "flex",
            height: "100%",
            width: 2,
            background: 0xdddddd
        });
        mainPanel.appendChild(divider);

        const pagePanel = document.createElement("div");
        Object.assign(pagePanel.style, {
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
        });
        mainPanel.appendChild(pagePanel);

        const placeHolderText = document.createElement("span");
        placeHolderText.textContent = `Please Select the Demo from Left Panel...`;
        pagePanel.appendChild(placeHolderText);

        for (let pageName in pages) {
            const button = document.createElement("button");
            button.textContent = pageName;
            button.style.margin = 5;
            button.setAttribute("uxp-variant", "action");
            leftPanel.appendChild(button);
            button.addEventListener("click", (event) => {
                let fileName = `./pages/${ pages[pageName] }.js`;
                let Page = require(fileName);
                let page = new Page();
                let rootNode = page.render();
                pagePanel.replaceChild(rootNode, pagePanel.lastChild);
            });
        }

        return mainPanel;
    }
}
