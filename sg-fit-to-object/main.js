/**
 * Steve Kwak
 *
 * How to use the plugin
 * Grouping:
 * 1. Group the items including the item you want to duplicate as well as all the items you want to fit the duplicated to
 * 2. Once grouping is done, select the original item and then use one of the following three commands.
 *
 * Non-grouping (Artboard):
 * 1. Select an item that you want to duplicate and fit to the Artboart (make sure the item is inside or touching the Artboard)
 * 2. Use one of the following three commands to fit the Artboard
 *
 * - "Fit Item": Fit the selected item to the artboard (rotation will be moved back to the original rotation).
 * - "Rotate Clock Fit Item": Rotate the item clockwise and fit the artboard.
 * - "Rotate Counter Clock Fit Item": Rotate the item counter clockwise and fit the artboard.
 *
 */

var Artboard = require("scenegraph").Artboard;
var Group = require("scenegraph").Group;
var commands = require("commands");


function fitItem(selection) {
	fitIt(selection, "original");
}

function rotatateClockFitItem(selection) {
	fitIt(selection, "right");
}

function rotateCounterClockFitItem(selection) {
	fitIt(selection, "left");
}

// Main function

function fitIt(selection, direction) {
	if (selection.hasArtwork) {
		var selectedItem = selection.items[0];
		var itemsToFit = getItemsToFit(selection);

		itemsToFit.forEach(function (itemToFit) {
			// Duplicate the selected item
			commands.duplicate();

			// Rotate the selection as requested
			rotate(selection.items[0], direction, selection.items[0].localCenterPoint);

			// Resize to fit the target object
			resize(selection.items[0], itemToFit.globalBounds);

			// Place the item in the center of the target object
			if (itemToFit.parent instanceof Group) {
				selection.items[0].placeInParentCoordinates(selection.items[0].localCenterPoint, getCenterPoint(itemToFit));
			} else {
				selection.items[0].placeInParentCoordinates(selection.items[0].localCenterPoint, itemToFit.localCenterPoint);
			}

			// Bring the item to the front
			commands.bringToFront()
		})
	}
}

// Helper functions

function getItemsToFit(selection) {
	var selectedItem = selection.items[0];
	var parent = selectedItem.parent;
	var itemsToFit = [];

	// First use case where items are grouped
	if (parent instanceof Group) {
		parent.children.forEach(function (childNode, i) {
			if (!childNode.selected) {
				itemsToFit.push(childNode);
			}
		});
	} else {
		// Second use case where items are not grouped (Fitting the Artboard)
		while (true) {
			if (parent instanceof Artboard) {
				itemsToFit.push(parent);
				break;
			} else {
				parent = parent.parent;
			}
		}
	}
	return itemsToFit;
}

function rotate(node, direction, centerPoint) {
	// Rotate the duplicated item based on the specified direction
	if (direction == "original") {
		if (node.rotation == -90) {
			node.rotateAround(90, centerPoint);
		} else if (node.rotation == 90) {
			node.rotateAround(-90, centerPoint);
		} else if (node.rotation == 180) {
			node.rotateAround(-180, centerPoint);
		} else if (node.rotation == -180) {
			node.rotateAround(180, centerPoint);
		}
	} else if (direction == "left") {
		if (node.rotation == 0) {
			node.rotateAround(-90, centerPoint);
		} else if (node.rotation == 90) {
			node.rotateAround(-180, centerPoint);
		} else if (node.rotation == 180) {
			node.rotateAround(-270, centerPoint);
		} else if (node.rotation == -180) {
			node.rotateAround(-270, centerPoint);
		}
	} else if (direction == "right") {
		if (node.rotation == 0) {
			node.rotateAround(90, centerPoint);
		} else if (node.rotation == -90) {
			node.rotateAround(180, centerPoint);
		} else if (node.rotation == 180) {
			node.rotateAround(-90, centerPoint);
		} else if (node.rotation == -180) {
			node.rotateAround(270, centerPoint);
		}
	}
}

function resize(node, globalBounds) {
	// Resize to fit the artboard
	if (node.rotation == 0 || node.rotation == -180 || node.rotation == 180) {
		node.resize(globalBounds.width, globalBounds.height);
	} else if (node.rotation == 90 || node.rotation == -90) {
		node.resize(globalBounds.height, globalBounds.width);
	}
}

function getCenterPoint(node) {
	console.log(node.parent)
	return {
		x: node.boundsInParent.x + node.boundsInParent.width / 2,
		y: node.boundsInParent.y + node.boundsInParent.height / 2
	}
}

module.exports = {
	commands: {
		fitItem: fitItem,
		rotatateClockFitItem: rotatateClockFitItem,
		rotateCounterClockFitItem: rotateCounterClockFitItem
	}
};