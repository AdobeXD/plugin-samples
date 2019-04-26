const React = require('react');

const styles = require('./StockSearch.css');

const searchStock = require('../util/search');
const fetchBinary = require('../util/fetchBinary');

const Card = require('./Card');
const SearchField = require("./SearchField");
const MaxResultsField = require("./MaxResultsField");
const { ViewSwitcher, VIEWS } = require("./ViewSwitcher");
const Grid = require("./Grid");
const List = require("./List");

const STATUS = {
    UNKNOWN: 0,
    LOADING: 1,
    LOADED: 2,
    WORKING: 3,
    ERROR: 4,
};

const initialState = {
    search: '',
    status: STATUS.UNKNOWN,
    progress: 0,
    results: [],
    selected: [],
    possibleFillCount: 0,
    msg: '',
    viewMode: VIEWS.GRID,
    maxResults: '20',
};

class StockSearch extends React.Component {
    constructor(props) {
        super(props);
        const { prefs } = props;

        this.state = Object.assign({}, initialState, { search: prefs.lastSearch } );

        this.doSearch = this.doSearch.bind(this);
        this.insertPhotos = this.insertPhotos.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
        this.infoForImage = this.infoForImage.bind(this);
        this.selectImage = this.selectImage.bind(this);
        this.viewChanged = this.viewChanged.bind(this);
        this.maxResultsChanged = this.maxResultsChanged.bind(this);
        this.documentStateChanged = this.documentStateChanged.bind(this);
    }

    documentStateChanged(selection) {
        const { GraphicNode, Artboard, Text } = require('scenegraph');
        const possibleFills = selection.items.filter(node => node instanceof GraphicNode && !(node instanceof Artboard || node instanceof Text));
        this.setState({possibleFillCount: possibleFills.length});
    }

    maxResultsChanged(e) {
        const newValue = e.target.value;
        this.setState(state => ({
            maxResults: newValue
        }), this.doSearch);
    }

    viewChanged(view) {
        this.setState(state => ({
            viewMode: view
        }));
    }

    async insertPhotos(e) {
        if (e) {
            e.preventDefault();
        }

        this.setState(state => ({
            status: STATUS.WORKING,
        }));

        const { editDocument } = require("application");
        const { selection } = require("scenegraph");

        editDocument( async () => {
            // non-webpack requires -- see webpack config!
            const storage = require('uxp').storage;
            const fs = storage.localFileSystem;
            const formats = storage.formats;
            const { Rectangle, ImageFill, GraphicNode, Artboard, Text } = require('scenegraph');

            const { results, selected } = this.state;

            const tmp = await fs.getTemporaryFolder();

            const possibleFills = selection.items.filter(node => node instanceof GraphicNode && !(node instanceof Artboard || node instanceof Text));

            for (let selectedIdx = 0; selectedIdx < selected.length; selectedIdx++) {
                const imgJson = results[selected[selectedIdx]];
                const {
                    thumbnail_url: url,
                    thumbnail_width: imageWidth,
                    thumbnail_height: imageHeight,
                } = imgJson;
                const name = url.substr(url.lastIndexOf('/') + 1);

                try {
                    const d = await fetchBinary(url);

                    const file = await tmp.createEntry(name, { overwrite: true });
                    await file.write(d, { format: formats.binary });

                    const bitmap = new ImageFill(file);
                    if (selectedIdx < possibleFills.length) {
                        possibleFills[selectedIdx].fill = bitmap;
                    } else {
                        const shape = new Rectangle();
                        shape.width = imageWidth;
                        shape.height = imageHeight;

                        shape.fill = bitmap;
                        selection.insertionParent.addChild(shape);
                    }
                    this.setState(state => ({
                        progress: ((selectedIdx + 1) / selected.length) * 100,
                    }));

                    // clean up after ourselves
                    file.delete();

                } catch (err) {
                    console.log(err.message);
                }
            }

            this.setState(state => ({
                status: STATUS.LOADED,
                selected: [],
                progress: 0,
            }));
        });
    }

    doSearch(e) {
        if (e) {
            e.preventDefault(); // should never close dialog -- we're a search instead
        }

        const { search, maxResults, prefs } = this.state;
        const { prefs: { apiKey: apikey } } = this.props;


        if (!search || !apikey) {
            return; // can't do anything
        }

        // update our prefs real quick
        this.props.prefs && (this.props.prefs.lastSearch = search);

        this.setState(
            state => ({
                status: STATUS.LOADING,
                selected: [],
            }),
            async () => {
                try {
                    const hits = await searchStock(search, { apikey, limit: maxResults });
                    if (hits) {
                        this.setState(state => ({
                            status: hits.length > 0 ? STATUS.LOADED : STATUS.ERROR,
                            results: hits,
                            msg: hits.length === 0 ? 'No results found. Try another search.' : '',
                        }));
                    } else {
                        this.setState(state => ({
                            status: STATUS.ERROR,
                            results: [],
                            msg: "Didn't get back anything useful. Try another search?",
                        }));
                    }
                } catch (err) {
                    console.log(err.message);
                    this.setState(state => ({
                        results: [],
                        status: STATUS.ERROR,
                        msg: `The request encountered an error. Please check your API KEY and try again. The error was: ${
                            err.message
                        }`,
                    }));
                }
            }
        );
    }

    selectImage(idx) {
        let selectedImages = [...this.state.selected];
        if (selectedImages.indexOf(idx) > -1) {
            selectedImages = selectedImages.filter(i => i !== idx);
        } else {
            selectedImages.push(idx);
        }
        this.setState(state => ({
            selected: selectedImages,
        }));
    }

    searchChanged(e) {
        const val = e.target.value;
        this.setState(state => ({
            search: val,
        }));
    }

    infoForImage(idx) {
        let { id, title } = this.state.results[idx];
        title = title.replace(/[^A-Za-z0-9]/g, '-').toLowerCase();
        const url = `https://stock.adobe.com/images/${title}/${id}`;
        require('uxp').shell.openExternal(url);
    }

    render() {
        const { dialog, onShowPreferences, prefs: { apiKey: apikey} } = this.props;
        const {
            search,
            status,
            results,
            selected,
            prefs,
            progress,
            msg,
            viewMode,
            maxResults,
            possibleFillCount
        } = this.state;

        const canSearch = search && apikey;
        const canInsert = selected.length > 0 && status !== STATUS.WORKING;

        return (
            <form method="dialog" onSubmit={this.doSearch} class={styles.form}>
                <SearchField search={search} onSearchChanged={this.searchChanged} onSearch={this.doSearch} disabled={!canSearch} />
                {(status === STATUS.LOADED || status === STATUS.WORKING) && (
                    <div className={`${styles.resultsInfo} row nogrow margin`}>
                        <MaxResultsField value={maxResults} onChange={this.maxResultsChanged} />
                        <ViewSwitcher view={viewMode} onChange={this.viewChanged} />
                    </div>
                )}
                <div className={styles.commandLine}>
                    {status === STATUS.WORKING ? (
                        <div>{`${Math.floor(progress)}% complete...`}</div>
                    ): (
                        <p>{`${possibleFillCount} shape(s)`}</p>
                    )}
                    <button id="insert" disabled={!canInsert} onClick={this.insertPhotos} uxp-variant="cta" uxp-edit-label="Insert Stock Photos">
                        {status === STATUS.WORKING ? 'Downloading...' : `Insert ${selected.length} Selected...`}
                    </button>
                </div>
                <div className={styles.resultsWrapper}>
                    {status === STATUS.LOADED || status === STATUS.WORKING ? (
                        viewMode === VIEWS.GRID ?
                            <Grid results={results} selected={selected} onInfoClick={this.infoForImage} onClick={this.selectImage} /> :
                            <List results={results} selected={selected} onInfoClick={this.infoForImage} onClick={this.selectImage} />
                    ) : status === STATUS.LOADING ? (
                        <div>
                            <p>Loading...</p>
                        </div>
                    ) : status === STATUS.ERROR ? (
                        <div>
                            <p>{msg}</p>
                        </div>
                    ) : (
                        <div className="column">
                            {!apikey ? (
                                <div>
                                    <p>Enter an API Key. You can get one from the Adobe Console. If you already have one, you can enter a key now.</p>
                                    <div className="row">
                                        <button uxp-variant="cta" onClick={onShowPreferences}>Enter API Key</button>
                                    </div>
                                </div>
                            ) : (
                                <p>Click the "Search" icon...</p>
                            )}
                        </div>
                    )}
                </div>
            </form>
        );
    }
}

module.exports = StockSearch;
