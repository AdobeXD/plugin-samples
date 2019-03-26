const React = require('react');

const styles = require('./App.css');

const Hello = require('./components/Hello');
const Clock = require('./components/Clock');
const ColorPicker = require('./components/ColorPicker');

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
            const { selection, executePanelCommand, Color } = require("scenegraph");
            executePanelCommand( () => selection.items.forEach(item => item.fill = new Color(`rgba(${r}, ${g}, ${b}, ${a})`)), "Change Color");
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
                <Hello text="Panels!" />
                <Clock />
                <ColorPicker r={r} g={g} b={b} a={a} onChange={this.colorChanged} />
            </panel>
        );
    }
}

module.exports = App;
