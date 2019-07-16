const React = require('react');
const IconButton = require("./IconButton");
const GridIcon = require("../assets/grid.svg").default;
const ListIcon = require("../assets/list.svg").default;

const styles = require("./ViewSwitcher.css");

const VIEWS = {
    LIST: 0,
    GRID: 1,
};

const ViewSwitcher = ({view = VIEWS.LIST, onChange} = {}) => (
    <div className={styles.viewMode}>
        <IconButton
            icon={ListIcon}
            onClick={() => onChange && onChange(VIEWS.LIST)}
            selected={view === VIEWS.LIST}>
        </IconButton>
        <IconButton
            icon={GridIcon}
            onClick={() => onChange && onChange(VIEWS.GRID)}
            selected={view === VIEWS.GRID}>
        </IconButton>
    </div>
);

module.exports = {
    ViewSwitcher,
    VIEWS,
};
