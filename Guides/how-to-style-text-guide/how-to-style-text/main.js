const { Text, Color } = require("scenegraph");

function addRedText(selection) {

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
    node.moveInParentCoordinates(100, 100);
}

function addRainbowText(selection) {

    const node = new Text();

    const colors = [
        "red", "orange", "yellow",
        "green", "blue", "indigo",
        "violet"
    ];

    node.text = colors.map(color => color.toUpperCase()).join(" ");

    // styleRange is an array of styles, and `length`
    // determines how far into the text each style applies.
    // A length of 1 means the style applies to one
    // character.
    node.styleRanges = colors.map(color => ({
        length: color.length + 1, // includes the space
        fill: new Color(color), // color understands color names
        fontSize: 24
    }));

    selection.insertionParent.addChild(node);
    node.moveInParentCoordinates(100, 100);
}

return {
    commands: {
        addRedText,
        addRainbowText
    }
};