// make sure to import the react plugin toolkit first as it contains compatibility shims
const { TabList } = require("@adobe/xd-plugin-toolkit-react");
const React = require("react");
const ReactDOM = require("react-dom");

function SampleTabContent(text) {
    return <div className="margin">{ text }</div>
}

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
                <div>
                    <TabList
                        quiet={this.state.type.includes("quiet")}
                        small={this.state.type.includes("small")}
                        tabs={{
                            "1": { label: "Section One", view: SampleTabContent.bind(null, "One Content") },
                            "2": { label: "Section Two", view: SampleTabContent.bind(null, "Two Content") },
                            "3": { label: "Section Three", view: SampleTabContent.bind(null, "Three Content") },
                            "4": { label: "Section Disabled", disabled: true }
                        }}
                    />
                </div>
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