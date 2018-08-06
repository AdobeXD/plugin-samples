
//  temporary stubs required for React. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
global.setTimeout = function(fn){ fn() }
global.clearTimeout = function(){};

let dialog;
function getDialog() {
    if (dialog == null) {

        let React = require("react");
        let ReactDOM = require("react-dom");

        dialog = document.createElement("dialog");
        ReactDOM.render(
            React.createElement("form", { style: { width: 250 } },
                React.createElement("h1", {}, "Hello React Raw"),
                React.createElement("p", {}, "The sample was built with React.createElement requiring no JSX preprocessing."),
                React.createElement("footer", {},
                    React.createElement("button", { type: "submit", "uxp-variant": "cta", onClick(e) { dialog.close() } }, "Done")
                )
            ),
            dialog
        );

    }
    return dialog;
}

module.exports = {
    commands: {
        menuCommand: function () {
            document.body.appendChild(getDialog()).showModal();
        }
    }
};