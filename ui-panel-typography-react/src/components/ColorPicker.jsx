const React = require("react");
const styles = require("./ColorPicker.css");

const Slider = ({label, value = 0, min = 0, max = 100, step = 1, unit = "", onChange} = {}) => (
    <label className={styles.slider}>
        <span>{label}</span>
        <input id={`range${label}`} type="range" step={(max-min) / 32} min={min} max={max} value={value} onChange={e => onChange && onChange(e.target.value)} />
        <input id={`input${label}`} type="number" uxp-quiet="true" value={value} min={min} max={max} step={step} onChange={e => onChange && onChange(e.target.value)} />
        { unit && <span>{unit}</span> }
    </label>
);

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.changeRed = this.changeRed.bind(this);
        this.changeGreen = this.changeGreen.bind(this);
        this.changeBlue = this.changeBlue.bind(this);
        this.changeAlpha = this.changeAlpha.bind(this);
    }
    changeRed(r) {
        this.emitChange("r", r);
    }

    changeGreen(g) {
        this.emitChange("g", g);
    }

    changeBlue(b) {
        this.emitChange("b", b);
    }

    changeAlpha(a) {
        this.emitChange("a", a);
    }

    emitChange(component, value) {
        const { onChange } = this.props;
        const { r, g, b, a } = this.props;
        if (onChange) {
            onChange(Object.assign({}, {r, g, b, a}, {[component]: value}));
        }
    }

    render() {
        const { r, g, b, a } = this.props;
        return (
            <div className={styles.wrapper}>
                <div className={styles.color} style={{backgroundColor: `rgba(${r}, ${g}%, ${b}%, ${a})`}}></div>
                <div className={styles.picker}>
                    <Slider label="R" max={255} value={r} onChange={this.changeRed} />
                    <Slider label="G" max={255} value={g} onChange={this.changeGreen} />
                    <Slider label="B" max={255} value={b} onChange={this.changeBlue} />
                    <Slider label="A" max={1} step={0.01} value={a} onChange={this.changeAlpha} />
                </div>
            </div>
        )
    }
}

module.exports = ColorPicker;