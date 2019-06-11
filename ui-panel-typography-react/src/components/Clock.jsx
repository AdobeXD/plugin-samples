const React = require("react");
const styles = require("./Clock.css");

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now: Date.now()
        };
        this._timer = undefined;
    }

    componentDidMount() {
        this._timer = setInterval(() => this.update(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    update() {
        this.setState({
            now: Date.now()
        });
    }

    render() {
        const { now } = this.state;
        const theTime = (new Date(now)).toLocaleTimeString();
        return (
            <p className={styles.clock}>{theTime}</p>
        )
    }
}

module.exports = Clock;