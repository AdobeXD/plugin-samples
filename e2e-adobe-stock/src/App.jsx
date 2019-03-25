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

        this.prefsChanged = this.prefsChanged.bind(this);
        this.showPreferences = this.showPreferences.bind(this);

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
                    <panel className={styles.panel}>
                        <StockSearch selection={selection} prefs={prefs} onShowPreferences={this.showPreferences} />
                    </panel>
                    <Preferences ref={this.preferencesDialog} prefs={prefs} onChange={this.prefsChanged} />
                </React.Fragment>
            )
        );
    }
}

module.exports = App;