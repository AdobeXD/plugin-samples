const { Path, Color } = require("scenegraph");
const commands = require("commands");

function drawWedges(selection) {

    // helper function to calculate the coordinates
    const coords = (radius, radian) => (radius * Math.cos(radian)) + "," + (radius * Math.sin(radian));

    // helper function to draw each wedge
    const draw = (chartRadius, startAngleRadian, endAngleRadian, wedgeColor) => {
        const pathData = `M0,0 L${coords(chartRadius, startAngleRadian)} A${chartRadius},${chartRadius},0,0,1,${coords(chartRadius, endAngleRadian)} L0,0`;
        const piece = new Path();
        piece.pathData = pathData;
        piece.fill = new Color(wedgeColor);
        piece.translation = { x: chartRadius, y: chartRadius };  // move so top left of chart is 0,0 instead of center
        selection.insertionParent.addChild(piece);
    }

    draw(100, 0, 2, "red");
    draw(100, 2, 3, "blue");
    draw(100, 3, 5, "yellow");
    draw(100, 5, 7, "purple");
}

return {
    commands: {
        drawWedges
    }
};