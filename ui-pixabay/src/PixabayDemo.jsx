const React = require('react');
const Stack = require('./Stack.jsx');
const Card = require('./Card.jsx');

const STATUS = {
    UNKNOWN: 0,
    LOADING: 1,
    LOADED: 2,
};

const API_URL = 'https://pixabay.com/api/';

function buildQuery({ search, apiKey } = {}) {
    return `${API_URL}?key=${apiKey}&image_type=photo&pretty=true&per_page=20&q=${search}`;
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
            apiKey: require("./apikey.json").apikey,
            status: STATUS.UNKNOWN,
            results: [],
            selected: [],
        };

        this.doSearch = this.doSearch.bind(this);
        this.searchChanged = this.searchChanged.bind(this);
    }

    doSearch() {
        const { search, apiKey } = this.state;
        this.setState(
            state => ({
                status: STATUS.LOADING,
                selected: [],
            }),
            () => {
                fetchJSON(buildQuery({ search, apiKey }))
                    .then(j => j.hits)
                    .then(hits => {
                        this.setState(state => ({
                            status: STATUS.LOADED,
                            results: hits,
                        }));
                    });
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
        this.setState(state => ({
            search: e,
        }));
    }

    render() {
        const { dialog } = this.props;
        const { search, status, results, selected } = this.state;
        return (
            <form method="dialog" style={{ width: 480, height: 500 }}>
                <h1>Pixabay Search</h1>
                <div className="col" style={{ overflow: "auto", height: 400 }}>
                    <div className="row">
                        <label className="row">
                            <span>Search:</span>
                            <input
                                type="text"
                                placeholder="Search"
                                defaultValue={search}
                                onChange={this.searchChanged}
                            />
                        </label>
                        <button onClick={this.doSearch}>
                            Search
                        </button>
                    </div>
                    {status === STATUS.LOADED ? (
                        <div className="row" style={{flexWrap: "wrap"}}>
                            {results.map((result, idx) => (
                                <Card
                                    key={idx}
                                    width={200}
                                    height={150}
                                    src={result.previewURL}
                                    selected={selected.indexOf(idx) > -1}
                                    onClick={() => this.selectImage(idx)}>
                                    <span>Likes: {result.likes}</span>
                                    <span>Downloads: {result.downloads}</span>
                                </Card>
                            ))}
                        </div>
                    ) : status === STATUS.LOADING ? (
                        <div direction="column">
                            <p>Loading...</p>
                        </div>
                    ) : (
                        <div className="column">
                            <p>Click the "Search" Button</p>
                        </div>
                    )}
                </div>
                <footer>
                    <button onClick={() => dialog.close()}>Cancel</button>
                    <button type="submit" uxp-variant="cta">
                        Insert Selected...
                    </button>
                </footer>
            </form>
        );
    }
}

module.exports = PixabayDemo;
