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

class SliderDemo {
    render() {
        this._rootNode = this._createContainer();

        let slider1Bar = this._createSlider1();
        this._rootNode.appendChild(slider1Bar);

        let stepSliderBar = this._createStepSlider();
        this._rootNode.appendChild(stepSliderBar);

        let disableCheck = this._createDisableCheck();
        this._rootNode.appendChild(disableCheck);

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
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
        });
        return bar;
    }

    _createSlider1() {
        const sliderBar = this._createBar();

        const slider1MinLabel = document.createElement("span");
        Object.assign(slider1MinLabel.style, {
            margin: 5
        });
        slider1MinLabel.textContent = `Min: `;
        sliderBar.appendChild(slider1MinLabel);

        this._slider1Min = document.createElement("input");
        this._slider1Min.setAttribute("type", "text");
        this._slider1Min.setAttribute("value", "0");
        Object.assign(this._slider1Min.style, {
            margin: 5,
            width: 60
        });
        this._slider1Min.addEventListener("change", this._changeSlider1Min.bind(this));
        sliderBar.appendChild(this._slider1Min);

        const slider1MaxLabel = document.createElement("span");
        Object.assign(slider1MaxLabel.style, {
            margin: 5
        });
        slider1MaxLabel.textContent = `Max: `;
        sliderBar.appendChild(slider1MaxLabel);

        this._slider1Max = document.createElement("input");
        this._slider1Max.setAttribute("type", "text");
        this._slider1Max.setAttribute("value", "10");
        Object.assign(this._slider1Max.style, {
            margin: 5,
            width: 60,
        });
        this._slider1Max.addEventListener("change", this._changeSlider1Max.bind(this));
        sliderBar.appendChild(this._slider1Max);

        this._slider1 = document.createElement("input");
        this._slider1.setAttribute("type", "range");
        this._slider1.setAttribute("value", "5");
        this._slider1.setAttribute("min", "0");
        this._slider1.setAttribute("max", "10");
        Object.assign(this._slider1.style, {
            margin: 5,
            minWidth: 130
        });
        this._slider1.addEventListener("change", this._slider1Changed.bind(this));
        sliderBar.appendChild(this._slider1);

        this._slider1Value = document.createElement("input");
        this._slider1Value.setAttribute("type", "text");
        Object.assign(this._slider1Value.style, {
            margin: 5,
            width: 80
        });
        this._slider1Value.addEventListener("change", this._changeSlider1Value.bind(this));
        sliderBar.appendChild(this._slider1Value);

        return sliderBar;
    }

    _createDisableCheck() {
        const bar = this._createBar();
        bar.style.marginTop = 10;

        const label = document.createElement("span");
        label.style.margin = 5;
        label.textContent = "Disable the sliders: ";
        bar.appendChild(label);

        this._disabledCheck = document.createElement("input");
        this._disabledCheck.style.type = "checkbox";
        this._disabledCheck.addEventListener("change", (ev) => {
            this._slider1.disabled = this._disabledCheck.checked;
            this._stepSlider.disabled = this._disabledCheck.checked;
        });
        bar.appendChild(this._disabledCheck);

        return bar;
    }

    _changeSlider1Min(ev) {
        this._slider1.setAttribute("min", this._slider1Min.value);
    }

    _changeSlider1Max(ev) {
        this._slider1.setAttribute("max", this._slider1Max.value);
    }

    _changeSlider1Value(ev) {
        this._slider1.setAttribute("value", this._slider1Value.value);
    }

    _slider1Changed(ev) {
        this._slider1Value.value = `${this._slider1.value}`;
    }

    _createStepSlider() {
        const sliderBar = this._createBar();

        const sliderStepLabel = document.createElement("span");
        Object.assign(sliderStepLabel.style, {
            margin: 5
        });
        sliderStepLabel.textContent = `Step: `;
        sliderBar.appendChild(sliderStepLabel);

        this._sliderStep = document.createElement("input");
        this._sliderStep.setAttribute("type", "text");
        this._sliderStep.setAttribute("value", "10");
        Object.assign(this._sliderStep.style, {
            margin: 5,
            width: 60
        });
        this._sliderStep.addEventListener("change", this._changeSliderStep.bind(this));
        sliderBar.appendChild(this._sliderStep);

        this._stepSlider = document.createElement("input");
        this._stepSlider.setAttribute("type", "range");
        this._stepSlider.setAttribute("value", "5");
        this._stepSlider.setAttribute("step", "10");
        this._stepSlider.setAttribute("min", "0");
        this._stepSlider.setAttribute("max", "100");
        Object.assign(this._stepSlider.style, {
            margin: 5,
            minWidth: 150
        });
        this._stepSlider.addEventListener("change", this._stepSliderChanged.bind(this));
        sliderBar.appendChild(this._stepSlider);

        this._stepSliderValue = document.createElement("input");
        this._stepSliderValue.setAttribute("type", "text");
        Object.assign(this._stepSliderValue.style, {
            margin: 5,
            width: 80
        });
        this._stepSliderValue.addEventListener("change", this._changeStepSliderValue.bind(this));
        sliderBar.appendChild(this._stepSliderValue);

        return sliderBar;
    }

    _changeSliderStep(ev) {
        this._stepSlider.setAttribute("step", this._sliderStep.value);
    }

    _changeStepSliderValue(ev) {
        this._stepSlider.setAttribute("value", this._stepSliderValue.value);
    }

    _stepSliderChanged(ev) {
        this._stepSliderValue.value = `${this._stepSlider.value}`;
    }

}

module.exports = SliderDemo;
