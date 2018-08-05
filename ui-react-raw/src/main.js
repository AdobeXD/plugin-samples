
//  temporary stubs required for React. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
global.setTimeout = function(fn){ fn() }
global.clearTimeout = function(){};

let React = require("react");
let ReactDOM = require("react-dom");

let dialog = ReactDOM.render(
    React.createElement("dialog", {},
        React.createElement("form", { style: { width: 200 } },
            React.createElement("h1", {}, "Hello React Raw")
        )
    )
    , document.body);

module.exports = {
    commands: {
        menuCommand: function () {
            dialog.showModal();
        }
    }
};