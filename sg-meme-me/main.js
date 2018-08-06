/**
 * NJ Jaramillo
 *
 * Select an image and two text items. Run this plugin to convert to a meme: position the text at the top & bottom
 * of the image and style the text in standard meme style.
 */

let {Rectangle, Color, Text} = require("scenegraph"),
    commands = require("commands");

function memeMe(selection) {
    let firstText, secondText;
    selection.items.forEach((node) => {
        if (node instanceof Text) {
            if (!firstText) {
                firstText = node;
                firstText.visible = false;
            } else if (!secondText) {
                secondText = node;
                secondText.visible = false;
            }
        }
    });

    if (!firstText && !secondText) {
        return;
    }
    if (firstText && !secondText) {
        secondText = firstText;
        firstText = "";
    }

    commands.group();
    let group = selection.items[0],
        containerBounds = group.boundsInParent;
    commands.ungroup();

    function applyMemeStyle(text) {
        if (text) {
            text.styleRanges = [{
                length: text.text.length,
                fontFamily: 'Impact',
                fontStyle: 'Regular',
                fontSize: 40,
                charSpacing: 0,
                underline: false,
                fill: new Color("#fff")
            }];
            text.stroke = new Color("#000");
            text.strokeEnabled = true;
            text.strokeWidth = 1;
            text.visible = true;
        }
    }

    applyMemeStyle(firstText);
    applyMemeStyle(secondText);

    function placeText(text, topOrBottomOffset, containerBounds) {
        // Place by reference to text center
        let localPoint = { x: text.localBounds.width / 2, y: text.localBounds.y + text.localBounds.height / 2 };

        // Calculate offsets
        let horizOffset = containerBounds.x + containerBounds.width / 2,
            vertOffset = containerBounds.y + (topOrBottomOffset > 0 ? topOrBottomOffset : containerBounds.height + topOrBottomOffset);

        text.placeInParentCoordinates(localPoint, {x: horizOffset, y: vertOffset});
    }

    placeText(firstText, 20, containerBounds);
    placeText(secondText, -20, containerBounds);
}

module.exports = {
    commands: {
        memeMe: memeMe
    }
};