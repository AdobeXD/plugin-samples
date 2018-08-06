/**
 * Steve Kwak
 *
 * Select one or more artboards and run "Create margin guide" to create guide rectangles around the artboard's content.
 * Re-run this command to update the guide rectangles after you've changed the size/position of the content.
 *
 * Run "Remove margin guide" to remove the guide rectangles from selected artboard(s).
 *
 * Demo: https://adobexdteam.slack.com/archives/C0B913DPV/p1524599264000015
 */


var {Rectangle, Color, Text, Group, Artboard, Ellipse, Line} = require("scenegraph");
var commands = require("commands");
var artboards = {};

function createMarginGuide(selection) {
	selection.items.forEach(function(node){
		if(node instanceof Artboard ){
			if ((node.guid in artboards)){
				removeMarginGuide(selection);
				createMarginGuide(selection);
			} else {
				var artboard = node;
				artboards[artboard.guid] = [];
				var metrics = getMetrics(artboard);

				// Create left rectangle
				var leftCenterPoint = {x: metrics.left/2, y: metrics.artboardHeight/2};
				createRectangle(artboard, metrics.leftMargin, metrics.leftMargin, metrics.artboardHeight, leftCenterPoint);

				// Create right rectangle
				var leftCenterPoint = {x: metrics.right + metrics.rightMargin/2, y: metrics.artboardHeight/2};
				createRectangle(artboard, metrics.rightMargin, metrics.rightMargin, metrics.artboardHeight, leftCenterPoint);

				// Create top rectangle
				var topCenterPoint = {x: metrics.artboardWidth/2, y: metrics.top - metrics.topMargin/2};
				createRectangle(artboard, metrics.topMargin, metrics.artboardWidth, metrics.topMargin, topCenterPoint);

				// Create bottom rectangle
				var bottomCenterPoint = {x: metrics.artboardWidth/2, y: metrics.bottom + metrics.bottomMargin/2};
				createRectangle(artboard, metrics.bottomMargin, metrics.artboardWidth, metrics.bottomMargin, bottomCenterPoint);
			}
		} else {
			console.log("Non-artboard item was selected or guide already exists");
		}
	})
}

function removeMarginGuide(selection) {
	selection.items.forEach(function(node){
		if(node instanceof Artboard && (node.guid in artboards)){
			var artboard = node;
			artboard.children.forEach(function(child){
				if (artboards[artboard.guid].indexOf(child.guid) > -1){
					child.removeFromParent();
				}
			})
			delete artboards[artboard.guid]
		}
	})
}


function createRectangle(artboard, marginLength, marginWidth, marginHeight, placementCenterPoint){
	// Create and place the rectangle
	var rectangle = new Rectangle();
	rectangle.width = marginWidth;
	rectangle.height = marginHeight;
	rectangle.fill = new Color("lightgray");
	rectangle.opacity = 0.3;
	artboard.addChild(rectangle);
	rectangle.placeInParentCoordinates(rectangle.localCenterPoint, placementCenterPoint);

	// Create and place the text
	var text = new Text();
	text.text = marginLength.toString();
	text.styleRanges = [{
	                length: text.text.length,
	                fontFamily: 'Impact',
	                fontStyle: 'Regular',
	                fontSize: 40,
	                charSpacing: 0,
	                underline: false,
	                fill: new Color("#000")
	            }];
    text.stroke = new Color("#fff");
    text.strokeEnabled = true;
    text.strokeWidth = 1;
    text.visible = true;
	artboard.addChild(text);
	text.placeInParentCoordinates(text.localCenterPoint, placementCenterPoint);

	artboards[artboard.guid].push(rectangle.guid);
	artboards[artboard.guid].push(text.guid);
}

function getMetrics(artboard){

	var metrics = {};
	metrics.artboardHeight = artboard.height;
	metrics.artboardWidth = artboard.width;
	metrics.left = artboard.width;
	metrics.leftMargin = 0;
	metrics.right = 0;
	metrics.rightMargin = 0;
	metrics.top = artboard.height;
	metrics.topMargin = 0;
	metrics.bottom = 0;
	metrics.bottomMargin = 0;

	artboard.children.forEach(function(artboardChild){
		if (artboardChild.boundsInParent.x < metrics.left) {
			metrics.left = artboardChild.boundsInParent.x;
			metrics.leftMargin = artboardChild.boundsInParent.x;
		}
		if (artboardChild.boundsInParent.x + artboardChild.boundsInParent.width > metrics.right) {
			metrics.right = artboardChild.boundsInParent.x + artboardChild.boundsInParent.width;
			metrics.rightMargin = metrics.artboardWidth - (artboardChild.boundsInParent.x + artboardChild.boundsInParent.width);
		}
		if (artboardChild.boundsInParent.y < metrics.top) {
			metrics.top = artboardChild.boundsInParent.y;
			metrics.topMargin = artboardChild.boundsInParent.y;
		}
		if (artboardChild.boundsInParent.y + artboardChild.boundsInParent.height > metrics.bottom) {
			metrics.bottom = artboardChild.boundsInParent.y + artboardChild.boundsInParent.height;
			metrics.bottomMargin = metrics.artboardHeight - (artboardChild.boundsInParent.y + artboardChild.boundsInParent.height);
		}
	})
	return metrics;
}


module.exports = {
    commands: {
        createMarginGuide: createMarginGuide,
        removeMarginGuide: removeMarginGuide
    }
};