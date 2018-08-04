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

class LabelDemo {
    render() {
        this._rootNode = this._createContainer();

        this._rootNode.appendChild(this._createUnderlineBar());
        this._rootNode.appendChild(this._createFontBar());
        this._rootNode.appendChild(this._createFontStyleBar());
        this._rootNode.appendChild(this._createFontSizeBar());

        this._longText = this._createLongText();
        this._rootNode.appendChild(this._longText);

        return this._rootNode;
    }

    _createContainer() {
        const topPage = document.createElement("div");
        Object.assign(topPage.style, {
            display: "flex",
            height: "100%",
            width: "100%",
            paddingTop: 50,
            alignItems: "center",
            justifyContent: "flexStart",
            flexDirection: "column"
        });

        return topPage;
    }

    _createRowContainer() {
        const r = document.createElement("div");
        Object.assign(r.style, {
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
        });
        return r;
    }

    _createColumnContainer() {
        const c = document.createElement("div");
        Object.assign(c.style, {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        });
        return c;
    }

    _createTitle(text) {
        const label = document.createElement("span");
        Object.assign(label.style, {
            margin: 5,
            minWidth: 150,
            textAlign: "right"
        });
        label.textContent = text;
        return label;
    }

    _createBar() {
        const bar = document.createElement("div");
        Object.assign(bar.style, {
            display: "flex",
            alignItems: "center",
            justifyContent: "flexStart",
            width: "100%",
            flexDirection: "row"
        });

        return bar;
    }

    _createUnderlineBar() {
        const ulBar = this._createBar();

        ulBar.appendChild(this._createTitle("Underline: "));
        this._underlineCheck = document.createElement("input");
        this._underlineCheck.style.type = "checkbox";
        this._underlineCheck.addEventListener("change", this._setUnderline.bind(this));
        ulBar.appendChild(this._underlineCheck);

        ulBar.style.height = 25;

        return ulBar;
    }

    _createFontBar() {
        const fontBar = this._createBar();

        fontBar.appendChild(this._createTitle("Select Font: "));

        this._fontNameDropdown = document.createElement("select");
        Object.assign(this._fontNameDropdown.style, {
            margin: 5
        });

        const fontCourier = document.createElement("option");
        fontCourier.textContent = `Courier`;
        this._fontNameDropdown.appendChild(fontCourier);
        this._fontNameDropdown.selectedNode = fontCourier;
        const fontComicSansMs = document.createElement("option");
        fontComicSansMs.textContent = `Comic Sans MS`;
        this._fontNameDropdown.appendChild(fontComicSansMs);
        const fontVerdana = document.createElement("option");
        fontVerdana.textContent = `Verdana`;
        this._fontNameDropdown.appendChild(fontVerdana);
        const fontTimesNewRoman = document.createElement("option");
        fontTimesNewRoman.textContent = `Times New Roman`;
        this._fontNameDropdown.appendChild(fontTimesNewRoman);

        this._fontNameDropdown.addEventListener("change", this._setFont.bind(this));

        fontBar.appendChild(this._fontNameDropdown);

        const defaultFontButton = document.createElement("button");
        defaultFontButton.style.margin = 5;
        defaultFontButton.textContent = "Apply Default Font";
        defaultFontButton.setAttribute("uxp-variant", "action");
        defaultFontButton.addEventListener("click", this._removeFont.bind(this));
        fontBar.appendChild(defaultFontButton);

        return fontBar;
    }

    _createFontStyleBar() {
        const fontStyleBar = this._createBar();

        fontStyleBar.appendChild(this._createTitle("Select Font Style: "));

        this._fontStyleDropdown = document.createElement("select");
        Object.assign(this._fontStyleDropdown.style, {
            margin: 5
        });

        const styleNormal = document.createElement("option");
        styleNormal.textContent = `normal`;
        this._fontStyleDropdown.appendChild(styleNormal);
        this._fontStyleDropdown.selectedNode = styleNormal;

        const styleItalic = document.createElement("option");
        styleItalic.textContent = `italic`;
        this._fontStyleDropdown.appendChild(styleItalic);

        this._fontStyleDropdown.addEventListener("change", this._setFontStyle.bind(this));

        fontStyleBar.appendChild(this._fontStyleDropdown);

        return fontStyleBar;
    }

    _createFontSizeBar() {
        const fontSizeBar = this._createBar();

        fontSizeBar.appendChild(this._createTitle("Select Font Size: "));

        this._fontSizeSlider = document.createElement("input");
        Object.assign(this._fontSizeSlider.style, {
            margin: 5,
            minWidth: 200,
            type: "range",
            min: 10,
            max: 50,
            value: 20
        });
        this._fontSizeSlider.addEventListener("change", this._changeFontSize.bind(this));
        fontSizeBar.appendChild(this._fontSizeSlider);

        return fontSizeBar;
    }

    _createLongText() {
        const longText = document.createElement("span");
        longText.textContent = `This is a long text. Use the controls above to change attributes.`;
        Object.assign(longText.style, {
            whiteSpace: "normal",
            margin: 20,
            fontSize: 20,
            minHeight: 200
        });

        longText.style.fontFamily = this._fontNameDropdown.selectedNode.textContent;

        return longText;
    }

    _setUnderline(ev) {
        if (this._underlineCheck.checked) {
            this._longText.style.textDecorationLine = "underline";
        }
        else {
            this._longText.style.textDecorationLine = "none";
        }
    }

    _setFont(ev) {
        this._longText.style.fontFamily = this._fontNameDropdown.selectedNode.textContent;
    }

    _removeFont(ev) {
        this._longText.style.fontFamily = "";
    }

    _setFontStyle(ev) {
        this._longText.style.fontStyle = this._fontStyleDropdown.selectedNode.textContent;
    }

    _changeFontSize(ev) {
        this._longText.style.fontSize = this._fontSizeSlider.value;
    }
}

module.exports = LabelDemo;
