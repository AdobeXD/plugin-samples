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

const mainPanel = require("./welcome/mainPanel");

module.exports = {
    commands: {
        onShowDialog: function() {
            //  create the dialog
            let dialog = document.createElement("dialog");

            let pluginArea = document.createElement("div");
            Object.assign(pluginArea.style, {
                display: "flex",
                width: 800,
                height: 600,
                flexDirection: "column",
                alignItems: "stretch",
                justifyContent: "space-between"
            });

            let content = mainPanel.createMainPanel();
            pluginArea.appendChild(content);

            let buttonArea = document.createElement("div");
            Object.assign(buttonArea.style, {
                id: "button-area",
                display: "flex",
                width: "100%",
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end"
            });
            pluginArea.appendChild(buttonArea);

            let closeButton = document.createElement("button");
            closeButton.setAttribute("uxp-variant", "cta");
            closeButton.textContent = "Close";
            closeButton.addEventListener("click", (ev)=> {
                dialog.close();
            });
            buttonArea.appendChild(closeButton);

            //  add our container to it
            dialog.appendChild(pluginArea);

            //  add the dialog to the main document
            document.body.appendChild(dialog);
            //  show the dialog
            dialog.showModal();
        }
    }
}
