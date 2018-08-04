
const { Text, Color } = require("scenegraph"); // [1]

function helloHandlerFunction(selection) {
    const el = new Text();
    el.text = "Hello!";
    el.styleRanges = [
        {
            length: el.text.length,
            fill: new Color("#FF0000")
        }
    ];
    selection.insertionParent.addChild(el);
    el.moveInParentCoordinates(100, 100);
}

module.exports = {
    commands: {
        helloCommand: helloHandlerFunction
    }
};