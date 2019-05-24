const React = require('react');

const styles = require('./App.css');

const VIEWS = {
    HTML: 0,
    RESULT: 1,
    CONSOLE: 2,
};

const initialState = {
    html: '',
    view: VIEWS.HTML,
    simulateDialog: true
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, initialState);

        if (this.props.html) {
            this.state.html = this.props.html;
        }

        ['htmlChanged', 'showHTML', 'showResult', 'preventEnter', 'simulateDialogChanged'].map(
            fn => (this[fn] = this[fn].bind(this))
        );
    }

    componentDidUpdate(nextProps) {
        if (this.state.html !== nextProps.html) {
            this.setState(() => {
                html: nextProps.html
            });
        }
    }

    htmlChanged(e) {
        const val = e.target.value;
        this.setState(state => ({
            html: val,
        }), () => {
            if (this.props.onChange) {
                this.props.onChange(val)
            }
        });
    }

    showHTML() {
        this.setState(state => ({
            view: VIEWS.HTML,
        }));
    }

    showResult() {
        this.setState(state => ({
            view: VIEWS.RESULT,
        }));
    }

    simulateDialogChanged(e) {
        this.setState(state => ({
            simulateDialog: !state.simulateDialog
        }));
    }

    preventEnter(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
    }

    render() {
        const { dialog, onSubmit } = this.props;
        const { html, view, simulateDialog } = this.state;

        return (
            <form className={styles.form} method="dialog" onSubmit={dialog ? dialog.close : onSubmit } >
                <h1 className={styles.h1}>
                    HTML Playground
                    <div className={styles.tabs}>
                        {
                            view === VIEWS.RESULT && (
                                <label className="row" style={{alignItems: "center"}}>
                                    <input type="checkbox"
                                        onChange={this.simulateDialogChanged}
                                        checked={simulateDialog}
                                        />
                                    <span style={{fontWeight: 'normal'}} >Dialog</span>
                                </label>
                            )
                        }
                        <button uxp-variant="action" uxp-selected={view === VIEWS.HTML ? "true" : ""} className={styles.tab} onClick={this.showHTML}>
                            HTML
                        </button>
                        <button uxp-variant="action" uxp-selected={view === VIEWS.RESULT ? "true" : ""} className={styles.tab} onClick={this.showResult}>
                            Results
                        </button>
                    </div>
                </h1>
                <hr />
                {view === VIEWS.HTML ? (
                    <textarea
                        className={`${styles.html} margin`}
                        onKeyDown={this.preventEnter}
                        onChange={this.htmlChanged}
                        defaultValue={html}
                    ></textarea>
                ) : (
                    <div className={`${styles.scrollWrapper} margin ${simulateDialog ? styles.backdrop : ""}`}>
                        <div className={simulateDialog ? styles.dialog : ""} ref={el => el && (el.innerHTML = html)} />
                    </div>
                )}
                {dialog ? (
                    <footer className={styles.footer}>
                        <button type="submit" uxp-variant="cta">
                            Close
                        </button>
                    </footer>
                ) : (
                    <footer className={styles.footer}>
                        <button type="submit" uxp-variant="cta">
                            Run
                        </button>
                    </footer>
                )
                }
            </form>
        );
    }
}

module.exports = App;
