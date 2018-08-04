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

class ImageDemo {
    render() {
        this._rootNode = this._createContainer();

        let imageRow1 = this._createImageRow1();
        this._rootNode.appendChild(imageRow1);

        let imageRow2 = this._createImageRow2();
        this._rootNode.appendChild(imageRow2);

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
            justifyContent: "top",
            flexDirection: "column",
            overflow: "hidden"
        });
        return topPage;
    }

    _createRowContainer() {
        const bar = document.createElement("div");
        Object.assign(bar.style, {
            display: "flex",
            justifyContent: "center",
            flexDirection: "row"
        });
        return bar;
    }

    _createColumnContainer() {
        const bar = document.createElement("div");
        Object.assign(bar.style, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        });
        return bar;
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

    _createImageWithHeight(imageSrc, height) {
        const image = document.createElement("img");
        Object.assign(image.style, {
            margin: 5,
            height: height
        });
        image.setAttribute("src", imageSrc);
        return image;
    }

    _createImageRow1() {
        const topCol = this._createColumnContainer();

        const row1 = this._createRowContainer();
        row1.appendChild(this._createLabel("Set the height of images: "));
        this._imageHeightSlider1 = this._createSlider(20, 150, 50);
        this._imageHeightSlider1.addEventListener("change", this._changeImageRow1Height.bind(this));
        row1.appendChild(this._imageHeightSlider1);

        const row2 = this._createRowContainer();
        this._image1row1 = this._createImageWithHeight(require.resolve("./assets/landscape-photo.jpg"), 50);
        row2.appendChild(this._image1row1);
        this._image2row1 = this._createImageWithHeight(require.resolve("./assets/portrait-photo.jpg"), 50);
        row2.appendChild(this._image2row1);
        this._image3row1 = this._createImageWithHeight(require.resolve("./assets/square-photo.jpg"), 50);
        row2.appendChild(this._image3row1);

        topCol.appendChild(row1);
        topCol.appendChild(row2);

        return topCol;
    }

    _changeImageRow1Height(ev) {
        this._image1row1.style.height = this._imageHeightSlider1.value;
        this._image2row1.style.height = this._imageHeightSlider1.value;
        this._image3row1.style.height = this._imageHeightSlider1.value;
    }

    _createContainerWithBorder() {
        const container = document.createElement("div");
        Object.assign(container.style, {
            margin: 5,
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            width: 100,
            border: "2px solid gray",
            borderRadius: 4
        });
        return container;
    }

    _createContainedImage(imageSrc) {
        const image = document.createElement("img");
        Object.assign(image.style, {
            maxWidth: "100%",
            maxHeight: "100%",
            backgroundSize: "contain"
        });
        image.setAttribute("src", imageSrc);
        return image;
    }

    _createImageRow2() {
        const topCol = this._createColumnContainer();

        const row1 = this._createRowContainer();
        row1.appendChild(this._createLabel("Scale down to fit. Width: "));
        this._imageWidthSlider1 = this._createSlider(50, 400, 100);
        this._imageWidthSlider1.addEventListener("change", this._changeImageRow2Width.bind(this));
        row1.appendChild(this._imageWidthSlider1);

        const row2 = this._createRowContainer();
        this._row2container1 = this._createContainerWithBorder();
        const image1row2 = this._createContainedImage(require.resolve("./assets/landscape-photo.jpg"));
        this._row2container1.appendChild(image1row2);
        row2.appendChild(this._row2container1);

        this._row2container2 = this._createContainerWithBorder();
        const image2row2 = this._createContainedImage(require.resolve("./assets/portrait-photo.jpg"));
        this._row2container2.appendChild(image2row2);
        row2.appendChild(this._row2container2);

        this._row2container3 = this._createContainerWithBorder();
        const image3row2 = this._createContainedImage(require.resolve("./assets/square-photo.jpg"));
        this._row2container3.appendChild(image3row2);
        row2.appendChild(this._row2container3);

        topCol.appendChild(row1);
        topCol.appendChild(row2);

        return topCol;
    }

    _changeImageRow2Width(ev) {
        this._row2container1.style.width = this._imageWidthSlider1.value;
        this._row2container2.style.width = this._imageWidthSlider1.value;
        this._row2container3.style.width = this._imageWidthSlider1.value;
    }

}

module.exports = ImageDemo;
