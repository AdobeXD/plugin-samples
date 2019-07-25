const React = require("react");

const PreferencesStore = require("./store/Preferences");
const StockSearch = require("./components/StockSearch");
const Preferences = require("./components/Preferences");

const styles = require("./App.css");

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            prefs: props.prefs || null,
        };

        this.preferencesDialog = React.createRef();
        this.panel = React.createRef();

        this.prefsChanged = this.prefsChanged.bind(this);
        this.showPreferences = this.showPreferences.bind(this);
        this.documentStateChanged = this.documentStateChanged.bind(this);

        this.init();
    }

    async init() {
        // load settings from persistent storage -- this is ASYNC
        this.setState( { prefs: await PreferencesStore.createFromSettings() })
    }

    prefsChanged(prefs) {
        this.setState( { prefs} );
    }

    showPreferences() {
        this.preferencesDialog.current.show();
    }

    documentStateChanged(selection) {
        if (this.panel && this.panel.current) {
            this.panel.current.documentStateChanged(selection);
        }
    }

    render() {
        const { prefs } = this.state;
        const { selection } = this.props;

        return (

            !prefs ? (
                <div className="error">
                    Loading preferences...
                </div>
            ) : (
                <React.Fragment>
                    <div className={styles.panel}>
                        <StockSearch ref={this.panel} selection={selection} prefs={prefs} onShowPreferences={this.showPreferences} />
                    </div>
                    <Preferences ref={this.preferencesDialog} prefs={prefs} onChange={this.prefsChanged} />
                </React.Fragment>
            )
        );
    }
}

module.exports = App;