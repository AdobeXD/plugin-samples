const {Rectangle, Color} = require("scenegraph"); 

function rectangleHandlerFunction(selection) { 

    const newElement = new Rectangle(); 
    newElement.width = 100;
    newElement.height = 50;
    newElement.fill = new Color("Purple");

    selection.insertionParent.addChild(newElement);
    newElement.moveInParentCoordinates(100, 100);

}

module.exports = {
    commands: {
        createRectangle: rectangleHandlerFunction
    }
};