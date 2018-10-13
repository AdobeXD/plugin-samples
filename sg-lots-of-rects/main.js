const { Rectangle, Color } = require("scenegraph");
const commands = require("commands");

function myPluginCommand(selection) {
  const rect = new Rectangle();
  rect.width = 320;
  rect.height = 320;

  rect.fill = null;
  rect.stroke = new Color("white");
  rect.opacity = 0.5;

  selection.insertionParent.addChild(rect);
  selection.items = [rect];

  let times = 0;
  while (times < 179) {
    commands.duplicate();

    const node = selection.items[0];
    node.rotateAround(5, node.localCenterPoint);
    node.moveInParentCoordinates(5, 0);

    times += 1;
  }
}

module.exports = {
  commands: {
    myPluginCommand
  }
};