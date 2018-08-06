//  temporary stubs required for React. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
global.setTimeout = function(fn){ fn() }
global.clearTimeout = function(){};

let React = require("react");
let ReactDOM = require("react-dom");

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: props.name || "" };
        this.onInputChange = (e) => {
            this.setState({ name: e.target.value })
        }
        this.onDoneClick = (e) => {
            this.props.dialog.close();
        }
    }

    render() {
        return (
            <form style={{ width: 300 }}>
                <link rel="stylesheet" href="./styles.css" />
                <h1>React with JSX Components</h1>
                <label>
                    <span>What is your name?</span>
                    <input onChange={this.onInputChange} />
                </label>
                <p>{"Hello " + this.state.name}</p>
                <footer>
                    <button type="submit" uxp-variant="cta" onClick={this.onDoneClick}>Done</button>
                </footer>
            </form>
        );
    }
}

let dialog;
function getDialog() {
    if (dialog == null) {
        dialog = document.createElement("dialog");
        ReactDOM.render(<HelloForm dialog={dialog} />, dialog);
    }
    return dialog
}

module.exports = {
    commands: {
        menuCommand: function () {
            document.appendChild(getDialog()).showModal();
        }
    }
};