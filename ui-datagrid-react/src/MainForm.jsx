const React = require("react");
const ReactDOM = require("react-dom");
const DataGrid = require("./DataGrid.jsx");

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
                <link rel="stylesheet" href="./styles.css" />
                <h1>DataGrid with React</h1>
                <DataGrid />
                <footer>
                    <button type="submit" uxp-variant="cta" onClick={this.onDoneClick}>Done</button>
                </footer>
            </form>
        );
    }
}
