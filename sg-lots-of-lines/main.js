const { Line, Color } = require("scenegraph");

function crossedLines() {
  return [
        {x1: 0, y1: 0, x2: 100, y2: 100, color: "red"},
        {x1: 100, y1: 0, x2: 0, y2: 100, color: "green"}
  ];
}

function hypnoticLines() {
  const lines = [ ];

  const width = 1920,
    height = 1080;
  for (let x = 0; x <= width; x = x + 50) {
    lines.push({
      x1: x,
      y1: 0,
      x2: width - x,
      y2: height,
      color: "blue"
    });
  }
  for (let y = 0; y <= height; y = y + 50) {
    lines.push({
      x1: 0,
      y1: y,
      x2: width,
      y2: height - y,
      color: "red"
    });
  }

  return lines;
}

function drawLines(selection, lines) {
  let idx = 0;
  while (idx < lines.length) {
    const data = lines[idx];
    const line = new Line();
    line.setStartEnd(data.x1, data.y1,
      data.x2, data.y2);
    line.stroke = new Color(data.color);
    selection.insertionParent.addChild(line);
    idx++;
  }
}

module.exports = {
  commands: {
    crossedLines: selection => drawLines(selection, crossedLines()),
    hypnoticLines: selection => drawLines(selection, hypnoticLines())
  }
};