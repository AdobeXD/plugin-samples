const React = require('react');

const styles = require("./ViewSwitcher.css");

const VIEWS = {
    LIST: 0,
    GRID: 1,
};

const ViewSwitcher = ({view = VIEWS.LIST, onChange} = {}) => (
    <div className={styles.viewMode}>
        <button
            onClick={() => onChange && onChange(VIEWS.LIST)}
            uxp-variant="action"
            uxp-quiet="true"
            uxp-selected={view === VIEWS.LIST ? 'true' : undefined}>
            <img src="assets/list.png" />
        </button>
        <button
            onClick={() => onChange && onChange(VIEWS.GRID)}
            uxp-variant="action"
            uxp-quiet="true"
            uxp-selected={view === VIEWS.GRID ? 'true' : undefined}>
            <img src="assets/grid.png" />
        </button>
    </div>
);

module.exports = {
    ViewSwitcher,
    VIEWS,
};
