const React = require('react');

const styles = require('./App.css');

const Hello = require('./components/Hello');
const Clock = require('./components/Clock');
const ColorPicker = require('./components/ColorPicker');

const lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui rutrum, congue velit a, auctor nulla. Aenean lacinia."
const lorem2 = "Aenean lacinia, leo quis tempus dapibus, sapien lacus efficitur mauris, et tristique eros tortor et mauris. Vivamus nec tellus condimentum, fermentum enim eget, eleifend velit."
const lorem3 = "Ut volutpat nulla ac egestas lobortis. Leo quis tempus dapibus."

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: {
                r: 255,
                g: 0,
                b: 0,
                a: 1,
            },
        };

        this.panel = React.createRef();
        this.documentStateChanged = this.documentStateChanged.bind(this);
        this.colorChanged = this.colorChanged.bind(this);
    }

    documentStateChanged(selection) {
        if (selection.items.length > 0) {
            const { Color } = require('scenegraph');
            const color = selection.items[0].fill;
            if (color instanceof Color) {
                this.setState({
                    color: {
                        r: color.r,
                        g: color.g,
                        b: color.b,
                        a: color.a / 255,
                    },
                });
            }
        }
    }

    colorChanged(color) {
        this.setState({
            color: {
                r: color.r,
                g: color.g,
                b: color.b,
                a: color.a
            },
        }, () => {
            const { r, g, b, a } = this.state.color;
            const { editDocument } = require("application");
            const { selection, Color } = require("scenegraph");
            editDocument({editLabel: "Change Colors"}, () => selection.items.forEach(item => item.fill = new Color(`rgba(${r}, ${g}, ${b}, ${a})`)));
        }
        );
    }

    render() {
        const { selection } = this.props;
        const {
            color: { r, g, b, a },
        } = this.state;

        return (
            <panel className={styles.panel}>
            <form method="dialog" style={{ width: 400 }} >
                <h1>H1 Heading, Large Rule, Large Paragraph</h1>
                <hr className="large" />
                <p className="large">{lorem1}</p>
                <p className="large">{lorem3}</p>
                <h2>H2 Heading, Normal Rule, Normal Paragraph</h2>
                <hr />
                <p>{lorem1}</p>
                <p>{lorem3}</p>
                <h3>H3 Heading, Small Rule, Small Paragraph</h3>
                <hr className="small"></hr>
                <p className="small">{ lorem1 }</p>
                <p className="small">{ lorem3 }</p>
                <footer>
                    <button uxp-variant="primary">Cancel</button>
                    <button uxp-variant="cta">Submit</button>
                </footer>
            </form>
            </panel>
        );
    }
}

module.exports = App;
