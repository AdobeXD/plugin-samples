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

const { shell } = require("uxp");

class APIsDemo {
    render() {
        this._rootNode = this._createContainer();

        const title = document.createElement("h2");
        title.textContent = "Demo APIs";
        this._rootNode.appendChild(title);

        let apis = this._createOpenExternal();
        this._rootNode.appendChild(apis);
        return this._rootNode;
    }

    _createContainer() {
        const topPage = document.createElement("div");
        Object.assign(topPage.style, {
            height: "100%",
            width: "100%",
            overflow: "scroll",
            margin: 15,
            padding: 10
        });
        return topPage;
    }

    _createOpenExternal() {
        const title = document.createElement("h3");
        title.textContent = "Open external";
        this._rootNode.appendChild(title);

        const container = document.createElement("form");
        container.style.display = "flex";
        container.style.flexDirection = "row";
        container.style.alignItems = "center";

        let url = this._createHRef();

        let input = this._externalUrlInput = document.createElement("input");
        input.setAttribute("type", "input");
        input.value = "http://www.adobe.com";
        input.style.flexGrow = 1;

        container.appendChild(input);
        container.appendChild(url);
        return container;
    }

    _createHRef() {
        const url = document.createElement("span");
        url.textContent = "Open the url";
        url.style.color = "gray";

        url.addEventListener("pointerenter", () => {
            url.style.color = "red";
        });
        url.addEventListener("pointerleave", () => {
            url.style.color = "gray";
        });
        url.addEventListener("click", () => {
             shell.openExternal(this._externalUrlInput.value);
        });
        return url;
    }

}

module.exports = APIsDemo;
