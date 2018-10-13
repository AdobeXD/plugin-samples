/**
 * Mike Chambers
 * Duplicates the selection randomly around the artboard.
 *
 * Set options in the config variable below.
 *
 * Known issues:
 * - Duplicating rotated objects does not position items correctly (unless converted to symbol first)
 * - When duplicating multiple objects, z-order for each object is grouped
 *
 */

var {Artboard, Rectangle, Ellipse, Color} = require("scenegraph");
var commands = require("commands");

var log = function(msg) {
	console.log("ADOBE XD PLUGIN :: " + msg);
}

var config = {
	PLUGIN_NAME:"randomizer", //plugin name
	ITEM_COUNT:250, //number of duplicates to create
	PADDING:0, //padding on edges of artboard
	RANDOM_OPACITY:true, //set a random opacity for duplicated items
	REMOVE_SOURCE:false, //remove selected items that were duplicated
	SELECT_ITEMS:false, //select all created items
	VISUAL_DEBUG:false, //draw debug info (points and bounding boxes)
	CONVERT_TO_SYMBOL:true //convert original item to symbol and reuse
};

var focusedArtboard;



//returns whether item can be duplicated
//by this script (ignore artboards)
var isValidDuplicationType = function (obj) {

	//might be able to use hasArtboards

	if(obj instanceof Artboard) {
		return false;
	}

	return true;
}

//filter out items from selections to only
//include items that we can duplicate
var filterNonSelectableItems = function(items){
	//filter out unsupported items

	let out = [];
	let len = items.length;

	for(let i = 0; i < len; i++) {
		let obj = items[i];

		if(!isValidDuplicationType(obj)) {
			continue;
		}

		out.push(obj);
	}

	return out;
}

//sets absolute x, y coordinates relative to containing
//artboard
var setCoordinatesRelativeToArtboard = function(obj, point) {
	let artboard = focusedArtboard;

	if(!artboard) {
		log("No artboard.");
		return false;
	}

/*
	obj.transform = obj.transform.translate(
		(artboard.globalBounds.x - obj.globalBounds.x) + x,
		(artboard.globalBounds.y - obj.globalBounds.y) + y
	);
	*/

	obj.transform = obj.transform.translate(
		(0 - obj.globalDrawBounds.x) + point.x,
		(0 - obj.globalDrawBounds.y) + point.y
	);

	drawPoint(new Point(obj.globalDrawBounds.x, obj.globalDrawBounds.y));
	drawBoundingBox(obj);


	return true;
};

var Point = function(x, y) {
	this.x = x;
	this.y = y;
};

//maybe send bounds in here. we can custom adjust based on shape dimensions
var randomPointOnArtboard = function(padding = 0) {
    return randomPointOnArtboardWithPadding(0,0,0,0);
};

var randomPointOnArtboardWithPadding = function(topPadding, rightPadding, bottomPadding, leftPadding) {

	let width = focusedArtboard.width;
	let height = focusedArtboard.height;

    var point = new Point(
        Math.random() * ((width - rightPadding) - (leftPadding)) + (leftPadding),
        Math.random() * ((height - bottomPadding) - (topPadding)) + (topPadding)
    );

    //Math.random() * ((bounds.right - padding) - (bounds.left + padding)) + (bounds.left + padding),
    //Math.random() * ((bounds.bottom - padding) - (bounds.top + padding)) + (bounds.top + padding)

    return point;
};

//gets a random point on artboard that entire bounds of item
//will fit in
var randomPointForObjOnArtboard = function(obj, padding = 0) {

	//var t = obj.transform;
/*
	obj.transform = {
		a:1, b:0, c:0,
		d:1, e:obj.globalDrawBounds.x, f:obj.globalDrawBounds.y
	};
		shape.transform = {
			a:1,b:0,c:0,
			d:1,e:obj.globalDrawBounds.x,f:obj.globalDrawBounds.y
		}*/

	/*obj.transform = {
		a:1, b:0, c:0,
		d:1, e:obj.globalDrawBounds.x, f:obj.globalDrawBounds.y
	};*/


	let out = randomPointOnArtboardWithPadding(
		padding,
		obj.globalDrawBounds.width + padding,
		obj.globalDrawBounds.height + padding,
		padding);

	//drawPoint(out);

	//obj.transform = t;

	return out;
}

var drawBoundingBox = function (obj) {

	if(!config.VISUAL_DEBUG) {
		return;
	}

	let shape = new Rectangle();
	shape.width = obj.globalDrawBounds.width;
	shape.height = obj.globalDrawBounds.height;
	shape.stroke = new Color("blue");
	shape.strokeWidth = 1.0;

	/*
	shape.transform = {
		a:1,b:0,c:0,
		d:1,e:obj.globalDrawBounds.x,f:obj.globalDrawBounds.y
	}
	*/

	shape.transform = shape.transform.translate(obj.globalDrawBounds.x, obj.globalDrawBounds.y);

	focusedArtboard.addChild(shape);
}

var drawPoint = function (point) {

	if(!config.VISUAL_DEBUG) {
		return;
	}

	let shape = new Ellipse();
	shape.radiusX = 10;
	shape.radiusY= 10;
	shape.stroke = new Color("blue");
	shape.fill = new Color("blue");
	shape.strokeWidth = 1.0;

	shape.transform = shape.transform.translate(point.x, point.y);

	focusedArtboard.addChild(shape);
}

var main = function(selection) {

	log("Executing "+ config.PLUGIN_NAME +" plugin");

	//get selected items
	var selectedItems = selection.items;

    focusedArtboard = selection.focusedArtboard;

	//make sure something is selected
	if(!selectedItems.length) {
		log("No items selected.");
		return;
	}

	let filteredItems = filterNonSelectableItems(selectedItems);

	let filteredLength = filteredItems.length;

	if(!filteredLength) {
		log("No items selected.");
		return;
	}


	if(config.CONVERT_TO_SYMBOL) {
		for(let i = 0; i < filteredLength; i++) {

			let obj = filteredItems[i];
			drawBoundingBox(obj);

			selection.items = obj;
			commands.createSymbol();
			filteredItems[i] = selection.items[0];
		}
	}



	//currently this doesnt work and you can only set a single item
	//selected, not multiple
	//let finalSelectedItems = filteredItems.slice(0);
	let finalSelectedItems = [];


	//loop through number of copies of items we are making
	//do it this way so multiple items are duplicated mixed together
	//this doesnt work though
	for(let k = 0; k < config.ITEM_COUNT; k++) {

		//note, cant control order of layers here. (since it is duplicate based)
		//so this doesnt really work well with multiple items
		//selected
		for(let i = 0; i < filteredLength; i++) {
			let obj = filteredItems[i];

			//this seems really roundabout
			//I just want to duplicated selected objects
			//but I have to unselect everything
			//selected single item
			//call duplicate command, and repeat
			//and then I still can easily get a reference to the item
			//i just created

			//note, i want to explicitly set where this is in the
			//child hierachy, so i can mix z-order of elements explicitly
			//but this duplicates from z order of item being duplicated
			selection.items = obj;

			//it would be useful if this returned the duplicated item.
			commands.duplicate();

			let obj2 = selection.items[0];

			let p = randomPointForObjOnArtboard(obj2, config.PADDING);

			//just want to set position, but have to do in really round about
			//way
			setCoordinatesRelativeToArtboard(obj2, p);

			finalSelectedItems.push(obj2);

			if(config.RANDOM_OPACITY) {
				obj2.opacity = Math.random();
			}
		}
	}

	if(config.REMOVE_SOURCE) {
		for(let i = 0; i < selectedItems.length; i++) {
			selection.items = selectedItems[i];
			commands.deleteAndCleanupParents();
		}
	}


	if(config.SELECT_ITEMS) {
		//note: this doesnt work. want to select multiple items
		selection.items = finalSelectedItems;
	} else {
		selection.items = filteredItems;
	}

	//want to select all newly created items
	//selectionModel.selected = finalSelectedItems;
}


module.exports = {
    commands: { goRandomize: main }
};