const { Text, Color } = require("scenegraph");

function createRedTextHandlerFunction(selection) {

    // create a new Text node
    const node = new Text();

    // assign some text
    node.text = "This is some red text";

    // Assign red to the text -- note that we
    // get the length of the text.
    node.styleRanges = [{
        length: node.text.length,
        fill: new Color("#FF0000"),
        fontSize: 24
    }];

    // add the text node to the scenegraph
    selection.insertionParent.addChild(node);

    // position te text node
    node.moveInParentCoordinates(20, 50);
}

function createRainbowTextHandlerFunction(selection) {

    const node = new Text();

    const textData = [
        { text: "This ", color: "red" },
        { text: "is ", color: "orange" },
        { text: "some ", color: "yellow" },
        { text: "ra", color: "green" },
        { text: "in", color: "blue" },
        { text: "bow ", color: "indigo" },
        { text: "text", color: "violet" }
    ];

    node.text = textData.map(item => item.text).join("");

    // styleRange is an array of styles, and `length`
    // determines how far into the text each style applies.
    // A length of 1 means the style applies to one
    // character.
    node.styleRanges = textData.map(item => ({
        length: item.text.length,
        fill: new Color(item.color),
        fontSize: 24
    }));

    selection.insertionParent.addChild(node);
    node.moveInParentCoordinates(20, 50);
}

module.exports = {
    commands: {
        "createRedTextCommand": createRedTextHandlerFunction,
        "createRainbowTextCommand": createRainbowTextHandlerFunction
    }
};
