const { Rectangle, Color } = require("scenegraph");
const commands = require("commands");

function draw(selection) {

  const r = new Rectangle();
  r.width = 320;
  r.height = 320;
  r.fill = null;
  r.stroke = new Color("rgba(255, 255, 255, 0.5)");

  selection.insertionParent.addChild(r);
  selection.items = [r];

  let c = 0;
  while (c++ < 179) {
    commands.duplicate();

    const node = selection.items[0];
    node.rotateAround(5, node.localCenterPoint);
    node.moveInParentCoordinates(5, 0);
  }
}

module.exports = {
  commands: {
    draw
  }
};