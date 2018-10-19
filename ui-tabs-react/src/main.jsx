//  temporary stubs required for React. These will not be required as soon as the XD environment provides setTimeout/clearTimeout
const reactShim = require("./react-shim");
const style = require("./styles.css");
const React = require("react");
const ReactDOM = require("react-dom");

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selected: props.selected || 0, type: "" };
        this.onInputChange = (e) => {
            this.setState({ name: e.target.value })
        }
        this.onDoneClick = (e) => {
            this.props.dialog.close();
        }
    }

    render() {
        let index = this.state.selected
        return (
            <form style={{ width: 500 }}>
                <h1>React Tab Control Sample</h1>
                <label className="row">
                    <span>
                        Tab Control Variant
                    </span>
                    <select onChange={e => { this.setState({ type: e.target.value })}}>
                        <option value="">Normal</option>
                        <option value="quiet">Quiet</option>
                        <option value="quiet small">Quiet Small</option>
                    </select>
                </label>
                <nav className={`row ${this.state.type}`}>
                    <span className={`tab ${index === 0 ? 'active' : ''}`} onClick={e => this.setState({ selected: 0 })}>Section One</span>
                    <span className={`tab ${index === 1 ? 'active' : ''}`} onClick={e => this.setState({ selected: 1 })}>Section Two</span>
                    <span className={`tab ${index === 2 ? 'active' : ''}`} onClick={e => this.setState({ selected: 2 })}>Section Three</span>
                    <span className="tab disabled">Section Disabled</span>
                </nav>
                <p>{`You have selected section: ${index + 1}`}</p>
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
            document.body.appendChild(getDialog()).showModal();
        }
    }
};