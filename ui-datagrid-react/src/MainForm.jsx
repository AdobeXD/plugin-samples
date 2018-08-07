const React = require("react");
const ReactDOM = require("react-dom");
const DataGrid = require("./DataGrid.jsx");
const style = require("./styles.css");

module.exports = class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: props.name || "" };
        this.onDoneClick = (e) => {
            this.props.dialog.close();
        }
    }

    render() {
        return (
            <form style={{ width: 800, height: 360 }}>
                <h1>DataGrid with React</h1>
                <DataGrid />
                <footer>
                    <button type="submit" uxp-variant="cta" onClick={this.onDoneClick}>Done</button>
                </footer>
            </form>
        );
    }
}
