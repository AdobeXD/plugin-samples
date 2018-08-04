const { Path, Color } = require("scenegraph");

function pointOnCircle(radius, angle) {
    const radians = angle * 2. * Math.PI / 360.;
    const xcoord = radius * Math.cos(radians);
    const ycoord = radius * Math.sin(radians);
    return xcoord + "," + ycoord;
}

function createWedge(selection, radius, startAngle, endAngle, color) {
    const startPt = pointOnCircle(radius, startAngle);
    const endPt = pointOnCircle(radius, endAngle);
    const pathData = `M0,0 L${startPt} A${radius},${radius},0,0,1,${endPt} L0,0`;
    const wedge = new Path();
    wedge.pathData = pathData;
    wedge.fill = new Color(color);
    wedge.translation = { x: radius, y: radius };
    selection.insertionParent.addChild(wedge);
}

function createPieChartHandlerFunction(selection) {
    createWedge(selection, 100, 0, 90, "red");
    createWedge(selection, 100, 90, 135, "blue");
    createWedge(selection, 100, 135, 225, "yellow");
    createWedge(selection, 100, 225, 360, "purple");
}

module.exports = {
    commands: {
        "createPieChartCommand": createPieChartHandlerFunction
    }
};
