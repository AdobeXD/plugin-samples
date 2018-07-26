const { Line, Color } = require("scenegraph");
const commands = require("commands");

const lineData = [
    { startX: 100, startY: 110, endX: 210, endY: 233 },
    { startX: 210, startY: 233, endX: 320, endY: 156 },
    { startX: 320, startY: 156, endX: 400, endY: 300 },
    { startX: 400, startY: 300, endX: 500, endY: 120 }
]

function randomColor() {
    const hexValues = ['00', '33', '66', '99', 'CC', 'FF'];
    const color = "#" + Array.from({ length: 3 }, _ => hexValues[Math.floor(Math.random() * hexValues.length)]).join("");
    return color;
}

function drawLines(selection) {
    let lines = [];
    lineData.forEach(data => {
        const line = new Line();
        line.setStartEnd(
            data.startX,
            data.startY,
            data.endX,
            data.endY
        )
        line.strokeEnabled = true;
        line.stroke = new Color(randomColor());
        line.strokeWidth = 3;
        lines.push(line);
        selection.editContext.addChild(line)
    })
    selection.items = lines
    commands.group()
}

return {
    commands: { drawLines }
};