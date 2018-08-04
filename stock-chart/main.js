/**
 * Charan Raj
 * 
 * This plugin draws a Line chart of the picked stock quote.
 * It first shows a UI Dialog where user can enter the stock quote. It fetches the stock details from a API end-point.
 * Then draws the Line chart of the stock prices on the current selection.
 * This plugin demonstrates some aspects of the XD plugin development - 
 * 1. Use of a dialog form element to get inputs from user
 * 2. use File APIs - Reading & Saving data from/into plugin data-folder, which is persistant storage, where developers can save & read their data across sessions.
 * 3. use network APIs to fetch data from remote urls.
 * 4. Create Path graphics elements and draw them on the canvas.
 * 5. Error handling in asynchronous workflow 
 *      It demostrate the use of a deferred promise object to handle and report errors to user and exit the workflow gracefully & leaving the XD scenegraph in a usable state.
 */


const sg = require("scenegraph");
const Artboard = sg.Artboard;
const Color = sg.Color;
const fs = require("uxp").storage.localFileSystem;

/**
* Shorthand for creating Elements.
* @param {*} tag The tag name of the element.
* @param {*} [props] Optional props.
* @param {*} children Child elements or strings
*/
function h(tag, props, ...children) {
    let element = document.createElement(tag);
    if (props) {
        if (props.nodeType || typeof props !== "object") {
            children.unshift(props);
        }
        else {
            for (let name in props) {
                let value = props[name];
                if (name == "style") {
                    Object.assign(element.style, value);
                }
                else {
                    element.setAttribute(name, value);
                    element[name] = value;
                }
            }
        }
    }
    for (let child of children) {
        element.appendChild(typeof child === "object" ? child : document.createTextNode(child));
    }
    return element;
}

var stockQuoteProviderUrl = "https://www.alphavantage.co/query?apikey=917CRL5YEX523TJG&function=TIME_SERIES_DAILY_ADJUSTED&symbol=";
var REQUIRED_NUM_DAYS = 5;

var deferredPromise;
var currentSelection;
var existingData = {};

var myDataFileName = "mydata.txt";
var daysName;

let stockInput;
let lastPicked;

let dialog =
    h("dialog",
        h("form", { onsubmit },
            h("h1", "Pick a Stock Quote!"),
            h("label",
                h("span", "Enter the stock symbol"),
                stockInput = h("input", {id: "stockInputId", type: "text", placeholder:  "Symbol" }),
                lastPicked = h("span", { style: { fontStyle: "italic", fontSize: 12} }, "")
            ),
            h("footer",
                h("button", { uxpVariant:"primary", onclick() { dialog.close(); deferredPromise.reject("Operation Cancelled") } }, "Cancel"),
                h("button", { uxpVariant:"cta", type:"submit", onclick(e) { dialog.close(); e.preventDefault(); handleStockQuotePicked(); } }, "Ok")
            )
        )
    );
document.body.appendChild(dialog);


Array.min = function( array ){
    return Math.min.apply( Math, array );
};

Array.max = function( array ){
    return Math.max.apply( Math, array );
};


function processQuoteData(quoteData) {
    var timeSeries = quoteData["Time Series (Daily)"];
    var daysKeys = Object.keys(timeSeries).slice(0, 5);
    var daysQuote = daysKeys.map(name => timeSeries[name] );
    daysName = daysKeys;
    var daysClosingQuote = daysQuote.map(obj => obj["4. close"]);
    return daysClosingQuote;
}

function getStockQuoteDetails(quote) {
    quote = quote.toUpperCase();
    var quoteUrl = stockQuoteProviderUrl + quote;
    // we can use fetch ( available in global ) to retrieve contents of remote url -
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    return fetch(quoteUrl).then(res => res.json()).then(contents => processQuoteData(contents));
}

function handleStockQuotePicked() {
    var quote = document.getElementById("stockInputId").value;
    return performStockFetchAndDraw(quote);
}

function onsubmit() {
    handleStockQuotePicked();
}


function getMetrics(selection) {
    var node = selection.items[0];
    if(node instanceof Artboard ){
       return { width: node.width, height: node.height };
    }
    return null;
}

function convertPointsToSVGPathData(points) {
    var pathData = "M";
    var notFirst = false;
    points.forEach(pt => {
        if (notFirst) {
            pathData += " L"
        }
        var x = parseInt(pt.x);
        var y = parseInt(pt.y);
        pathData += `${x} ${y}`
        notFirst = true;
    });
    return pathData;
}


function normalizeQutes(box, data, numDays) {
    
    var min = Array.min(data);
    var max = Array.max(data);

    var kXNumSteps = 6; 
    var range = max - min;
    var step = range / (kXNumSteps - 2);
    var startQuote = min - step;
    var endQuote = max + step;
    var normalizedQuotes = data.map(quote => (quote - startQuote ) / (endQuote - startQuote));
    console.log("nomar are " + normalizedQuotes);
    
    var yCords = normalizedQuotes.map(val => Math.floor(box.height * val));
    var xCords = [];
    var currX = 0;
    var numStepsX = Math.floor(box.width / numDays);
    for (var i = 0; i < numDays; ++i) {
        xCords.push(currX);
        currX += numStepsX;
    }    
    var points = xCords.map((val, index) => { return {x: val, y: yCords[index]} });
    return points;
}

function plotQuotesOnArtboard(metrics, data, days) {

    var artBoardSize = { width: metrics.width, height: metrics.height };

    var plotWidth = artBoardSize.width * ( 3 / 4);
    var plotHeight = artBoardSize.height / 2;
    
    var plotLeftOnArtboard = artBoardSize.width / 8;
    var plotBottomOnArtboard = artBoardSize.height * ( 3 / 4)
    
    var plotRect = {width: plotWidth, height: plotHeight};
    
    var points = normalizeQutes(plotRect, data, days);
    
    var pointsOnArtBoard = points.map(point => { return {x: plotLeftOnArtboard + point.x, y: plotBottomOnArtboard - point.y } });
    
    return pointsOnArtBoard;
}

function createPathWithData(pathData) {
    const kLineWidth = 3;
    const kLineColor = new Color("black");

    var path = new sg.Path();
    path.strokeWidth = kLineWidth;
    path.stroke = kLineColor;
    path.pathData = pathData;
    return path;
}

function addPathGraphicsFromPoints(selection, points) {
    var pathData = convertPointsToSVGPathData(points);
    var path = createPathWithData(pathData);
    selection.insertionParent.addChild(path);
}

function createTextElement(str, color, size = 0) {
    var text = new sg.Text();
    text.text = str;
    // text.fill = new Color("blue");
    text.styleRanges = [{ 
        length: text.text.length,
        fontFamily: 'Impact',
        fontStyle: 'Regular',
        fontSize: size > 0 ? size : 16,
        charSpacing: 0,
        fill: color,
        underline: false,
    }];
    text.visible = true;
    return text;
}

function createLineChartFromData(selection, quoteResults, quote) {
    quoteResults = quoteResults.reverse();
    var metrics = getMetrics(selection);
    if (!metrics) {
        console.log("No Artboard selected - skipping drawing Lines");
        return;
    }
    var pointsOnArtBoard = plotQuotesOnArtboard(metrics, quoteResults, REQUIRED_NUM_DAYS);
    addPathGraphicsFromPoints(selection, pointsOnArtBoard);
    
    // add x-line 
    var yPt = pointsOnArtBoard[0].y + 20;
    var xLinePoints = pointsOnArtBoard.map(pt =>  {
        return {x: pt.x, y: yPt}
    });

    addPathGraphicsFromPoints(selection, xLinePoints);
    var dates = daysName.map(day => day.replace("2018-", ""));
    // place Text place holders at the points
    var texts = []
    for(var i = 0; i < quoteResults.length; ++i) {
        var text = createTextElement(quoteResults[i], new Color("#FF00C4"));
        var dateTxt = createTextElement(dates[i], new Color("blue"));
        selection.insertionParent.addChild(text);
        selection.insertionParent.addChild(dateTxt);
        var pt = pointsOnArtBoard[i];
        pt.y -= 15;
        text.placeInParentCoordinates(text.localCenterPoint, pt);

        var dPt = xLinePoints[i];
        dPt.y += 10;
        dateTxt.placeInParentCoordinates(dateTxt.localCenterPoint, dPt);
    }

    var quoteText = createTextElement(quote, new Color("#FF00C4"), 36);
    selection.insertionParent.addChild(quoteText);
    var quotePt = {x: metrics.width / 4, y: metrics.height / 4};
    quoteText.placeInParentCoordinates(quoteText.localCenterPoint, quotePt);

    return true;
}

function performStockFetchAndDraw(quote) {
    var selection = currentSelection;
    return getStockQuoteDetails(quote).then(result => {
        return createLineChartFromData(selection, result, quote);
    }).then(res => {
        return saveLastQuoteToDataFile(quote);
    }).then(res => deferredPromise.resolve(true)) // we are done with the workflow - resolve the promise to let XD "close" the current session.
    .catch(err => deferredPromise.reject(err)); // there is some error in the workflow = reject the promise and let xd gracefully exist the current session. 
}

async function saveLastQuoteToDataFile(lastQuote) {
    const pluginDataFolder = await fs.getDataFolder();
    try {
        // first create the entry and then write.
        var dataEntry = await pluginDataFolder.createEntry(myDataFileName, { overwrite: true});
        return await dataEntry.write(lastQuote);
    }
    catch(e) {
        // report any errors here.
    }
    return true;
}

async function readLastQuoteFromDataFile() {
    var lastQuote = null;
    const pluginDataFolder = await fs.getDataFolder();
    try {
        // put this in a try-catch block - getEntry throws if the file doesn't exists.
        var dataEntry = await pluginDataFolder.getEntry(myDataFileName);
        lastQuote = await dataEntry.read();
    }
    catch(e) {

    }
    return lastQuote;
}


function createDeferredPromise(selection) {
    var deferred = {};
    deferred.promise = new Promise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
}


async function startStockChartWorkflow(selection, root) {
    // we create a promise object and keep this around to report the success or error asynchronously.
    currentSelection = selection;
    deferredPromise = createDeferredPromise();
    // check for last picked stock quote and populate that in the input palceholder of dialog.
    // this uses the Plugin DataFolder, which is a persistant storage mechanism - to storage and retrieve any plugin related data
    // across plugin sessions.
    readLastQuoteFromDataFile().then(quote => {  
        lastPicked.textContent = quote ? "Last Picked Stock: " + quote : "";
        return dialog.showModal();
    })
    .catch(err => {
        deferredPromise.reject(false);
    });
    
    return deferredPromise.promise;
}

module.exports = {
    commands: {
        stockChartHandler: startStockChartWorkflow
    }
};