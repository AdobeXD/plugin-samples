const React = require('react');
const IconButton = require("./IconButton");
const DotsIcon = require("../assets/dots.svg").default;
const styles = require('./List.css');

const List = ({ results, selected, onInfoClick, onClick } = {}) => (
    <div className={styles.resultsList}>
        {results.map(({ title, thumbnail_url }, idx) => (
            <div key={idx} className={`row nogrow ${styles.resultRow}`}>
                <label className="row nogrow">
                    <input
                        type="checkbox"
                        checked={selected.indexOf(idx) > -1}
                        onChange={() => onClick && onClick(idx)}
                    />
                    <div className={styles.resultRowImageWrapper}>
                        <img src={thumbnail_url} />
                    </div>
                    <span>{title}</span>
                </label>
                <IconButton
                    title="More information"
                    className={styles.moreInfo}
                    icon={DotsIcon}
                    onClick={e => {
                        onInfoClick && onInfoClick(idx);
                        e.stopPropagation();
                    }}/>
            </div>
        ))}
    </div>
);

module.exports = List;
