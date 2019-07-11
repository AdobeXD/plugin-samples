let dialog;
function createPolygon() {
    const html = `
        <style>
            title {
                display: block;
                text-align: center;
                font-size: 20px;
                margin-bottom: 20px;
            }
            label.row > span {
                color: #8E8E8E;
                text-align: right;
                font-size: 9px;
            }
            label.row input {
                flex: 1 1 auto;
            }
        </style>
        <form method="dialog" id="main">
            <title class="title"> Create a polygon </title>
            <div class="row break">
                <label class="row">
                    <span>Width</span>
                    <input type="number" uxp-quiet="true" id="width" value="150" placeholder="Width" />
                </label>
                <label class="row">
                    <span>Heigth</span>
                    <input type="number" uxp-quiet="true" id="height" value="150" placeholder="Height" />
                </label>
                <label class="row">
                    <span>Sides</span>
                    <input type="number" uxp-quiet="true" id="sides" value="10" placeholder="Sides" />
                </label>
                <label class="row">
                    <span>Corner Radii</span>
                    <input type="number" uxp-quiet="true" id="radii" value="10" placeholder="Radii" />
                </label>
                <label class="row">
                    <span>Color</span>
                    <input type="text" uxp-quiet="true" id="color" value="red" placeholder="Color" />
                </label>
            </div>
            <footer><button id="ok" type="submit" uxp-variant="cta">Apply</button></footer>
        </form>
        `
    function exec() {
        const { selection, Polygon, Color } = require("scenegraph")
        const width = Number(document.querySelector("#width").value);
        const height = Number(document.querySelector("#height").value);
        const sides = Number(document.querySelector("#sides").value);
        const radii = Number(document.querySelector("#radii").value);
        const color = document.querySelector("#color").value.toLowerCase();
        let polygon = new Polygon();
        polygon.width = width;
        polygon.height = height;
        polygon.fill = new Color(color);
        polygon.cornerCount = sides;
        polygon.setAllCornerRadii(radii);
        selection.insertionParent.addChild(polygon);
    }
    if (!dialog) {
        dialog = document.createElement("dialog");
        dialog.innerHTML = html;
        document.appendChild(dialog);
        document.querySelector("form").addEventListener("submit", exec);
    }
    return dialog.showModal()
}

module.exports = {
    commands: {
        createPolygon
    }
};