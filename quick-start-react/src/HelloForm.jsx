const React = require('react');
const { Text, Color } = require("scenegraph");

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "" };
        this.onInputChange = (e) => {
            this.setState({ name: e.target.value })
        }
        this.onDoneClick = (e) => {
            const selection = this.props.selection;
            const newText = new Text();
            newText.text = this.state.name;
            newText.styleRanges = [{
                length: newText.text.length,
                fill: new Color("#00F"),
                fontSize: 50
            }];
            selection.insertionParent.addChild(newText);
            newText.moveInParentCoordinates(100, 100);
            props.dialog.close();
        }
    }

    render() {
        return (
            <form style={{ width: 300 }}>
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

module.exports = HelloForm;