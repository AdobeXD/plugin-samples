/**
 * Peter Flynn
 *
 * Sample plugin with two object-duplication commands:
 * - "Repeat Item": Select an object plus a text node with a number (N) in the text. Makes N copies of the object
 *   laid out in a horizontal row.
 * - "Rotate Repeat": Similar, but arranges the copies in a circle. The text node doubles as a way to define the
 *   centerpoint of the rotation. Works best when the thing you're duplicating is a symbol!
 */

var Text = require("scenegraph").Text;
var commands = require("commands");

function simpleRepeat(selection) {
    var items = selection.items;
    var textNode = (items[0] instanceof Text)? items[0] : items[1],
        targetNode = (items[0] instanceof Text)? items[1] : items[0];

    var numTimes = parseInt(textNode.text);
    for (var i = 1; i < numTimes; i++) {
        // Create duplicate of node
        selection.items = targetNode;
        commands.duplicate();
        var clone = selection.items[0];

        // Move node to the right of previous nodes, with 20px padding
        clone.moveInParentCoordinates((clone.localBounds.width + 20) * i, 0);
    }
}


function rotateRepeat(selection) {
    var items = selection.items;
    var textNode = (items[0] instanceof Text)? items[0] : items[1],
        targetNode = (items[0] instanceof Text)? items[1] : items[0];

    var targetCtr = targetNode.localCenterPoint,
        textCtrInParent = textNode.transform.transformPoint(textNode.localCenterPoint),
        targetCtrInParent = targetNode.transform.transformPoint(targetCtr),
        delta = { x: targetCtrInParent.x - textCtrInParent.x, y: targetCtrInParent.y - textCtrInParent.y },
        distance = Math.sqrt(delta.x*delta.x + delta.y*delta.y);

    var numCopies = parseInt(textNode.text);

    for (var i = 1; i < numCopies; i++) {
        // Create duplicate of node
        selection.items = targetNode;
        commands.duplicate();
        var clone = selection.items[0];

        // Rotate node to correct angle
        var angleDeg = 360 / numCopies * i;
        clone.rotateAround(angleDeg, targetCtr);

        // Move node to correct orbit position
        var angleRad = angleDeg * Math.PI / 180;
        var deltaFromTextCtr = { x: Math.sin(angleRad) * distance, y: -Math.cos(angleRad) * distance };
        clone.placeInParentCoordinates(targetCtr, {
            x: deltaFromTextCtr.x + textCtrInParent.x,
            y: deltaFromTextCtr.y + textCtrInParent.y
        });
    }
}


module.exports = {
    commands: {
        simpleRepeat: simpleRepeat,
        rotateRepeat: rotateRepeat
    }
};