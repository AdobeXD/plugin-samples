const { Artboard, Rectangle, Ellipse, Text, Color } = require("scenegraph");


function createElements(selection) {
	for (let i = 0; i < 5; i++) {
		// create rectangles
		let rectangle = new Rectangle();
		rectangle.width = 30 * i;
		rectangle.height = 20 * i;
		rectangle.fill = new Color("gray");
		selection.insertionParent.addChild(rectangle);
		rectangle.moveInParentCoordinates(50 * i, 50 * i);

		// create ellipses
		let ellipse = new Ellipse();
		ellipse.radiusX = 20 * i;
		ellipse.radiusY = 20 * i;
		ellipse.fill = new Color("gray");
		selection.insertionParent.addChild(ellipse);
		ellipse.moveInParentCoordinates(100 * i, 200 * i);

		// create texts
		let txt = new Text();
		txt.text = `example text ${i}`
		txt.styleRanges = [
			{
				length: txt.text.length,
				fill: new Color("gray"),
				fontSize: 20
			}
		];
		selection.insertionParent.addChild(txt);
		txt.moveInParentCoordinates(200 * i, 100 * i);
	}
}

function filterAndColor(selection, root) {
	root.children.forEach(node => {
		if (node instanceof Artboard) {
			let artboard = node;
			let rectangles = artboard.children.filter(artboardChild => {
				return artboardChild instanceof Rectangle;
			})
			rectangles.forEach(rectangle => {
				rectangle.fill = new Color("red");
			})
		}
	})
}

module.exports = {
	commands: {
		createElements,
		filterAndColor
	}
};

