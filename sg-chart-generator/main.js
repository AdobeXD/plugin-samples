/**
 * Peter Flynn
 *
 * Generates a pie or bar chart from numeric data entered in text nodes:
 * 1. Create several text objects whose text content is a number
 * 2. Set each one to the desired color for that data point's bar / pie wedge
 * 2. Select all the text objects
 * 3. Run "Create Bar Chart" or "Create Pie Chart" as desired
 *
 * Note: the chart is created at 0,0 in global document coordinates, so it might not appear near your text items
 * if they are located elsewhere in the document.
 */

/*jshint esnext: true */
/*globals console, require */

var sg = require("scenegraph"),
    commands = require("commands");


// Generate bar chart
function barChart(selection, root) {
    var max = 0;
    var values = selection.items.map(function (node) {
        var val = parseFloat(node.text);
        max = Math.max(max, val);
        return { color: node.fill, val: val };
    });

    const chartHt = 100,
          barWid = 20,
          barSpacing = 10;
    selection.items.forEach(function (node, i) {
        var piece = new sg.Rectangle();
        piece.width = barWid;
        piece.height = values[i].val / max * chartHt;
        piece.placeInParentCoordinates({x: 0, y: 0 }, { x: i * (barWid + barSpacing), y: chartHt - piece.height });  // bars are evenly spaced in X, bottom flush in Y
        piece.fill = values[i].color;
        selection.insertionParent.addChild(piece);
    });
}

function pieChart(selection, root) {
    var total = 0;
    var values = selection.items.map(function (node) {
        var val = parseFloat(node.text);
        total += val;
        return { color: node.fill, val: val };
    });

    function coords(r, angle) {
        return (r * Math.cos(angle)) + "," + (r * Math.sin(angle));
    }

    const chartR = 50;
    const RAD360 = Math.PI * 2;
    var startValue = 0;
    var wedges = selection.items.map(function (node, i) {
        var piece = new sg.Path();
        var startAngleRad = startValue / total * RAD360,
            endAngleRad = (startValue + values[i].val) / total * RAD360,
            wedgeSizeDeg = (endAngleRad - startAngleRad) / RAD360 * 360;
        var pathData = "M0,0 L" + coords(chartR, startAngleRad) + " A" + chartR + "," + chartR + "," + wedgeSizeDeg + ",0,1," + coords(chartR, endAngleRad) + " L0,0";
        console.log(pathData);
        piece.pathData = pathData;
        piece.fill = values[i].color;
        piece.translation = {x: chartR, y: chartR};  // move so top left of chart is 0,0 instead of center
        selection.insertionParent.addChild(piece);

        startValue += values[i].val;
        return piece;
    });

    selection.items = wedges;
    commands.group();
}


module.exports = {
    commands: {
        barChart: barChart,
        pieChart: pieChart
    }
};
