const React = require('react');
const Card = require('./Card.jsx');

const styles = require('./PixabayDemo.css');

const STATUS = {
    UNKNOWN: 0,
    LOADING: 1,
    LOADED: 2,
    WORKING: 3,
};

const API_URL = 'https://pixabay.com/api/';

function buildQuery({ search, apiKey } = {}) {
    return `${API_URL}?key=${apiKey}&image_type=photo&pretty=true&per_page=20&q=${search}`;
}
function fetchBinary(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status === 200) {
                try {
                    resolve(req.response);
                } catch (err) {
                    reject(`Couldn't parse response. ${err.message}, ${req.response}`);
                }
            } else {
                reject(`Request had an error: ${req.status}`);
            }
        };
        req.onerror = reject;
        req.onabort = reject;
        req.open('GET', url);
        req.responseType = 'arraybuffer';
        req.send();
    });
}
function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status === 200) {
                try {
                    resolve(JSON.parse(req.response));
                } catch (err) {
                    reject(`Couldn't parse response. ${err.message}, ${req.response}`);
                }
            } else {
                reject(`Request had an error: ${req.status}`);
            }
        };
        req.onerror = reject;
        req.onabort = reject;
        req.open('GET', url);
        req.send();
    });
}

class PixabayDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'cats',
            apiKey: require('./apikey.json').apikey,
            showSettings: false,
            status: STATUS.UNKNOWN,
            progress: 0,
            results: [],
            selected: [],
        };

        if (!this.state.apiKey) {
            this.state.showSettings = true;
        }

        this.doSearch = this.doSearch.bind(this);
        this.insertPhotos = this.insertPhotos.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
        this.apiKeyChanged = this.apiKeyChanged.bind(this);
        this.toggleSettings = this.toggleSettings.bind(this);
        this.infoForImage = this.infoForImage.bind(this);
    }

    toggleSettings() {
        this.setState(state => ({
            showSettings: !state.showSettings,
        }));
    }

    async insertPhotos(e) {
        e.preventDefault();
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
                largeImageURL: url,
                webformatWidth: imageWidth,
                webformatHeight: imageHeight,
            } = imgJson;
            const name = url.substr(url.lastIndexOf('/') + 1);

            try {
                const d = await fetchBinary(url);

                const file = await tmp.createEntry(name, { overwrite: true });
                await file.write(d, { format: formats.binary });

                console.log(name);
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
        if (this.state.selected.length > 0) {
            // seems like this is a request to insert images?
            this.insertPhotos(e);
            return;
        }
        e.preventDefault(); // should never close dialog -- we're a search instead
        const { search, apiKey } = this.state;
        if (!search || !apiKey) {
            return; // can't do anything
        }
        this.setState(
            state => ({
                status: STATUS.LOADING,
                selected: [],
            }),
            async () => {
                try {
                    const j = await fetchJSON(buildQuery({ search, apiKey }));
                    const hits = j.hits;
                    this.setState(state => ({
                        status: STATUS.LOADED,
                        results: hits,
                    }));
                } catch (err) {
                    this.setState(state => ({
                        status: STATUS.UNKNOWN
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
            apiKey: val,
        }));
    }

    infoForImage(idx) {
        const imgJson = this.state.results[idx];
        const { pageURL: url } = imgJson;

        require("uxp").shell.openExternal(url);
    }

    render() {
        const { dialog } = this.props;
        const { search, status, results, selected, apiKey, showSettings, progress } = this.state;
        return (
            <form method="dialog" onSubmit={this.doSearch}>
                <h1>
                    <a href="https://www.pixabay.com">
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
                                defaultValue={apiKey}
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
                        disabled={!(apiKey && search)}
                        title="Search">
                        <img src="./assets/search.png" />
                    </button>
                </div>
                <div className={styles.resultsWrapper}>
                    {status >= STATUS.LOADED ? (
                        <div className={styles.results}>
                            {results.map((result, idx) => (
                                <Card
                                    key={idx}
                                    width={200}
                                    height={150}
                                    src={result.previewURL}
                                    selected={selected.indexOf(idx) > -1}
                                    onInfoClick={e => {this.infoForImage(idx); e.stopPropagation();}}
                                    onClick={() => this.selectImage(idx)}
                                />
                            ))}
                        </div>
                    ) : status === STATUS.LOADING ? (
                        <div direction="column">
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <div className="column">
                            {!apiKey ? (
                                <div>
                                    <p>Enter an API Key. You can get one from:</p>
                                    <a href="https://pixabay.com/en/service/about/api/">
                                        https://pixabay.com/en/service/about/api/
                                    </a>
                                </div>
                            ) : (
                                <p>Click the "Search" icon...</p>
                            )}
                        </div>
                    )}
                </div>
                <footer>
                    {status === STATUS.WORKING && <div>{`${Math.floor(progress)}% complete...`}</div>}
                    <button onClick={() => dialog.close()}>Cancel</button>
                    <button
                        disabled={selected.length === 0 || status === STATUS.WORKING || !apiKey}
                        onClick={this.insertPhotos}
                        uxp-variant="cta">
                        {status === STATUS.WORKING ? 'Downloading...' : 'Insert Selected...'}
                    </button>
                </footer>
            </form>
        );
    }
}

module.exports = PixabayDemo;
