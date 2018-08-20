//  temporary stubs required for React. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
global.setTimeout = function(fn){ fn() }
global.clearTimeout = function(){};

let React = require("react");
let ReactDOM = require("react-dom");

const App = require("./StockSearch.jsx");

let dialog;
function getDialog(selection) {
    if (dialog == null) {
        dialog = document.createElement("dialog");
        ReactDOM.render(<App dialog={dialog} selection={selection}/>, dialog);
    }
    return dialog;
}

module.exports = {
    commands: {
        search: function (selection) {
            return document.appendChild(getDialog(selection)).showModal();
        }
    }
};