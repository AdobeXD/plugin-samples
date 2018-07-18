
const { Text, Color } = require("scenegraph"); // [1]

function sayHello(selection) {
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

return { // [5]
    commands: {
        helloCommand: sayHello
    }
}