const React = require('react');

const styles = require('./SearchField.css');

const Search = ({search, onSearchChanged, onSearch, disabled = false} = {}) => (
    <div className="row nogrow">
        <label className="row">
            <input
                className = {styles.searchInput}
                type="search"
                uxp-quiet="true"
                placeholder="Search"
                defaultValue={search}
                onChange={onSearchChanged}
            />
        </label>
        <button
            type="submit"
            onClick={onSearch}
            uxp-variant="action"
            disabled={disabled}
            uxp-quiet="true"
            title="Search">
            <img src="assets/search.png" />
        </button>
    </div>
);

module.exports = Search;
