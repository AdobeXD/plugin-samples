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

const imageUrl = require.resolve("./assets/looks.png");

class ButtonDemo {
    render() {
        this._rootNode = this._createContainer();

        let buttonClickedLabelBar = this._createButtonClickedLabel();
        this._rootNode.appendChild(buttonClickedLabelBar);

        let actionButtonBar = this._createActionButtonBar();
        this._rootNode.appendChild(actionButtonBar);

        let quietActionButtonBar = this._createActionButtonBar(true);
        this._rootNode.appendChild(quietActionButtonBar);

        let actionButtonBarImageOnly = this._createActionButtonBarWithImage(false, true);
        this._rootNode.appendChild(actionButtonBarImageOnly);

        let actionQuietButtonBarImageOnly = this._createActionButtonBarWithImage(true, true);
        this._rootNode.appendChild(actionQuietButtonBarImageOnly);

        let actionButtonBarImageWithText = this._createActionButtonBarWithImage(false, false);
        this._rootNode.appendChild(actionButtonBarImageWithText);

        let actionQuietButtonBarImageWithText = this._createActionButtonBarWithImage(true, false);
        this._rootNode.appendChild(actionQuietButtonBarImageWithText);

        let primaryButtonBar = this._createOvalButtonBar("primary");
        this._rootNode.appendChild(primaryButtonBar);

         let secondaryButtonBar = this._createOvalButtonBar("secondary");
        this._rootNode.appendChild(secondaryButtonBar);

        let warningButtonBar = this._createOvalButtonBar("warning");
        this._rootNode.appendChild(warningButtonBar);

        let ctaButtonBar = this._createOvalButtonBar("cta");
        this._rootNode.appendChild(ctaButtonBar);

        let imageButtonBar = this._createImageButton();
        this._rootNode.appendChild(imageButtonBar);

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

    _createBar(barTitle) {
        const bar = document.createElement("div");
        Object.assign(bar.style, {
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "flexStart",
            flexDirection: "row"
        });

        if (barTitle !== undefined) {
            const text = this._createSpan(barTitle + ": ");
            bar.appendChild(text);
        }
        return bar;
    }

    _createButtonClickedLabel() {
        const buttonBar = this._createBar();
        this._buttonClickedLabel = document.createElement("span");
        this._buttonClickedLabel.textContent = "Button waiting to be clicked";
        this._buttonClickedLabel.setAttribute("margin", 5);
        buttonBar.appendChild(this._buttonClickedLabel);
        return buttonBar;
    }

    _handleNormalButtonClicked(ev) {
        if (this._buttonClickedCount === undefined) {
            this._buttonClickedCount = 0;
        }
        this._buttonClickedLabel.textContent = `Button clicked ${++this._buttonClickedCount} time(s)!`;
    }

    _createImageButton() {
        const buttonBar = this._createBar("Image Button");

        const button = document.createElement("input");
        Object.assign(button.style, {
            type: "image",
            appearance: "none",
            margin: 5
        });
        button.setAttribute("src", imageUrl);
        button.addEventListener("click", this._handleNormalButtonClicked.bind(this));
        buttonBar.appendChild(button);

        return buttonBar;
    }

    _createImage(url) {
        let img = document.createElement("img");
        img.setAttribute("src", url);
        return img;
    }

    _createSpan(text) {
        let span = document.createElement("span");
        span.textContent = text;
        span.style.margin = 5;
        return span;
    }

    _createSpectrumButton(uxpVariant, uxpQuiet = false) {
        let button = document.createElement("button");
        button.style.margin = 5;
        button.setAttribute("uxp-variant", uxpVariant);
        button.setAttribute("uxp-quiet", uxpQuiet);
        button.addEventListener("click", this._handleNormalButtonClicked.bind(this));
        return button;
    }

    _createOvalButtonBar(uxpVariant) {
        const title = uxpVariant.charAt(0).toUpperCase() + uxpVariant.slice(1);
        const buttonBar = this._createBar(title + " Button");

        let button = this._createSpectrumButton(uxpVariant);
        button.textContent = title;
        buttonBar.appendChild(button);

        button = this._createSpectrumButton(uxpVariant, true);
        button.textContent = title + " Quiet";
        buttonBar.appendChild(button);

        button = this._createSpectrumButton(uxpVariant);
        button.textContent = "Disabled";
        button.setAttribute("disabled", true);
        buttonBar.appendChild(button);

        button = this._createSpectrumButton(uxpVariant, true);
        button.textContent = "Quiet Disabled";
        button.setAttribute("disabled", true);
        buttonBar.appendChild(button);

        return buttonBar;
    }

    _createActionButtonBar(uxpQuiet = false) {
        const uxpVariant  = "action";

        let title = uxpVariant.charAt(0).toUpperCase() + uxpVariant.slice(1);
        let barTitle =  title + " Button";
        if (uxpQuiet) {
            title += " Quiet";
            barTitle += " Quiet";
        }
        const buttonBar = this._createBar(barTitle);
        let button = this._createSpectrumButton(uxpVariant, uxpQuiet);
        button.textContent = title;
        buttonBar.appendChild(button);

        button = this._createSpectrumButton(uxpVariant, uxpQuiet);
        button.textContent = title + " Selected";
        button.setAttribute("uxp-selected", true);
        buttonBar.appendChild(button);

        button = this._createSpectrumButton(uxpVariant, uxpQuiet);
        button.textContent =  title + " Disabled";
        button.setAttribute("disabled", true);
        buttonBar.appendChild(button);

        return buttonBar;
    }

     _createActionButtonBarWithImage(uxpQuiet = false, imageOnly = false) {
        const uxpVariant  = "action";
        let title =  uxpVariant.charAt(0).toUpperCase() + uxpVariant.slice(1);
        let barTitle =  title + " Button";
        if (imageOnly) {
            barTitle += " Image Only";
        } else {
            barTitle += " with Image";
        }
        if (uxpQuiet) {
            title += " Quiet";
            barTitle += " Quiet";
        }

        const buttonBar = this._createBar(barTitle);

        let text;
        let button = this._createSpectrumButton(uxpVariant, uxpQuiet);
        let img = this._createImage(imageUrl);
        button.appendChild(img);
        if (!imageOnly) {
            text = this._createSpan(title);
            button.appendChild(text);
        }
        buttonBar.appendChild(button);

        button = this._createSpectrumButton(uxpVariant, uxpQuiet);
        img = this._createImage(imageUrl);
        button.appendChild(img);
        if (!imageOnly) {
            text = this._createSpan(title + " Selected");
            button.appendChild(text);
        }
        button.setAttribute("uxp-selected", true);
        buttonBar.appendChild(button);

        button = this._createSpectrumButton(uxpVariant, uxpQuiet);
        img = this._createImage(imageUrl);
        button.appendChild(img);
        if (!imageOnly) {
            text = this._createSpan(title + " Disabled");
            button.appendChild(text);
        }
        button.setAttribute("disabled", true);
        buttonBar.appendChild(button);

        return buttonBar;
    }
}

module.exports = ButtonDemo;
