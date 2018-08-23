const React = require('react');
const Card = require('./Card');

const styles = require('./StockSearch.css');

const searchStock = require('./util/search');
const fetchBinary = require('./util/fetchBinary');

const MAX_RESULTS = [
    "20",
    "50",
    "75",
    "100"
];

const VIEWS = {
    LIST: 0,
    GRID: 1,
};

const STATUS = {
    UNKNOWN: 0,
    LOADING: 1,
    LOADED: 2,
    WORKING: 3,
    ERROR: 4,
};

const initialState = {
    search: 'cats',
    apikey: require('./apikey.json').apikey,
    showSettings: false,
    status: STATUS.UNKNOWN,
    progress: 0,
    results: [],
    selected: [],
    msg: '',
    viewMode: VIEWS.GRID,
    maxResults: '20',
};

class StockSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, initialState);

        if (!this.state.apikey) {
            this.state.showSettings = true;
        }

        this.doSearch = this.doSearch.bind(this);
        this.insertPhotos = this.insertPhotos.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
        this.apiKeyChanged = this.apiKeyChanged.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.infoForImage = this.infoForImage.bind(this);
        this.showGrid = this.showGrid.bind(this);
        this.showList = this.showList.bind(this);
        this.maxResultsChanged = this.maxResultsChanged.bind(this);
    }

    maxResultsChanged(e) {
        const newValue = e.target.value;
        this.setState(state => ({
            maxResults: newValue
        }), this.doSearch);
    }

    showGrid() {
        this.setState(state => ({
            viewMode: VIEWS.GRID,
        }));
    }

    showList() {
        this.setState(state => ({
            viewMode: VIEWS.LIST,
        }));
    }

    toggleSettings() {
        this.setState(state => ({
            showSettings: !state.showSettings,
        }));
    }

    async insertPhotos(e) {
        if (e) {
            e.preventDefault();
        }

        this.setState(state => ({
            status: STATUS.WORKING,
        }));

        // non-webpack requires -- see webpack config!
        const storage = require('uxp').storage;
        const fs = storage.localFileSystem;
        const formats = storage.formats;
        const { Rectangle, BitmapFill } = require('scenegraph');

        const { results, selected } = this.state;
        const { selection } = this.props;

        const tmp = await fs.getTemporaryFolder();

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

                const shape = new Rectangle();
                shape.width = imageWidth;
                shape.height = imageHeight;

                const bitmap = new BitmapFill();
                bitmap.loadFromURL(file.nativePath);
                shape.fill = bitmap;
                selection.insertionParent.addChild(shape);
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

        this.props.dialog.close();
    }

    doSearch(e) {
        if (e) {
            e.preventDefault(); // should never close dialog -- we're a search instead
        }

        const { search, apikey, maxResults } = this.state;
        if (!search || !apikey) {
            return; // can't do anything
        }
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

    apiKeyChanged(e) {
        const val = e.target.value;
        this.setState(state => ({
            apikey: val,
        }));
    }

    infoForImage(idx) {
        let { id, title } = this.state.results[idx];
        title = title.replace(/[^A-Za-z0-9]/g, '-').toLowerCase();
        const url = `https://stock.adobe.com/images/${title}/${id}`;
        require('uxp').shell.openExternal(url);
    }

    render() {
        const { dialog } = this.props;
        const {
            search,
            status,
            results,
            selected,
            apikey,
            showSettings,
            progress,
            msg,
            viewMode,
            maxResults,
        } = this.state;

        const canSearch = search && apikey;
        const canInsert = selected.length > 0 && status !== STATUS.WORKING;

        return (
            <form method="dialog" onSubmit={this.doSearch}>
                <h1>
                    <a href="https://stock.adobe.com/">
                        <img className={styles.logo} src="./assets/logo.png" />
                    </a>
                    <button uxp-variant="action" uxp-quiet="true" onClick={this.toggleSettings}>
                        <img
                            src={showSettings ? './assets/chevron-up.png' : './assets/settings.png'}
                        />
                    </button>
                </h1>
                {showSettings && (
                    <div className="row nogrow">
                        <label className="row">
                            <span>API Key</span>
                            <input
                                type="text"
                                placeholder="API Key"
                                defaultValue={apikey}
                                onChange={this.apiKeyChanged}
                            />
                        </label>
                    </div>
                )}
                <div className="row nogrow">
                    <label className="row">
                        <span>Search:</span>
                        <input
                            type="text"
                            placeholder="Search"
                            defaultValue={search}
                            onChange={this.searchChanged}
                        />
                    </label>
                    <button
                        type="submit"
                        onClick={this.doSearch}
                        uxp-variant="action"
                        disabled={!canSearch}
                        title="Search">
                        <img src="./assets/search.png" />
                    </button>
                </div>
                {(status === STATUS.LOADED || status === STATUS.WORKING) && (
                    <div className={`${styles.resultsInfo} row nogrow margin`}>
                        <label className="row">
                        <span>Show: </span>
                            <select onChange={this.maxResultsChanged} value={maxResults}
                                    ref={el => el && (el.value = maxResults)}>
                                {MAX_RESULTS.map(n =>
                                    <option key={n} value={`${n}`}>{`${n}`}</option>
                                )}
                            </select>
                        </label>
                        <div className={styles.viewMode}>
                            <button
                                onClick={this.showList}
                                uxp-variant="action"
                                uxp-quiet="true"
                                uxp-selected={viewMode === VIEWS.LIST ? 'true' : undefined}>
                                <img src="assets/list.png" />
                            </button>
                            <button
                                onClick={this.showGrid}
                                uxp-variant="action"
                                uxp-quiet="true"
                                uxp-selected={viewMode === VIEWS.GRID ? 'true' : undefined}>
                                <img src="assets/grid.png" />
                            </button>
                        </div>
                    </div>
                )}
                <div className={styles.resultsWrapper}>
                    {status === STATUS.LOADED || status === STATUS.WORKING ? (
                        viewMode === VIEWS.GRID ? (
                            <div className={styles.results}>
                                {results.map((result, idx) => (
                                    <Card
                                        key={idx}
                                        width={200}
                                        height={150}
                                        title={result.title}
                                        src={result.thumbnail_url}
                                        selected={selected.indexOf(idx) > -1}
                                        onInfoClick={e => {
                                            this.infoForImage(idx);
                                            e.stopPropagation();
                                        }}
                                        onClick={() => this.selectImage(idx)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className={styles.resultsList}>
                                {results.map((result, idx) => (
                                    <label key={idx} className={`row nogrow ${styles.resultRow}`}
                                    >
                                        <input type="checkbox" defaultChecked={selected.indexOf(idx) > -1}
                                           ref={el => el && (el.onchange= () => this.selectImage(idx))}
                                         />
                                        <div className={styles.resultRowImageWrapper}>
                                            <img src={result.thumbnail_url}/>
                                        </div>
                                        <span>{result.title}</span>
                                        <button uxp-variant="action" uxp-quiet="true"
                                         onClick={e => {
                                            this.infoForImage(idx);
                                            e.stopPropagation();
                                         }}
                                        >
                                            <img src="assets/dots.png"/>
                                        </button>
                                    </label>
                                ))}
                            </div>
                        )
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
                                    <p>Enter an API Key. You can get one from the Adobe Console.</p>
                                </div>
                            ) : (
                                <p>Click the "Search" icon...</p>
                            )}
                        </div>
                    )}
                </div>
                <footer>
                    {status === STATUS.WORKING && (
                        <div>{`${Math.floor(progress)}% complete...`}</div>
                    )}
                    <button onClick={() => dialog.close()}>Cancel</button>
                    <button disabled={!canInsert} onClick={this.insertPhotos} uxp-variant="cta">
                        {status === STATUS.WORKING ? 'Downloading...' : 'Insert Selected...'}
                    </button>
                </footer>
            </form>
        );
    }
}

module.exports = StockSearch;
