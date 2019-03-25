const React = require('react');
const styles = require('./List.css');

const List = ({ results, selected, onInfoForImage, onClick } = {}) => (
    <div className={styles.resultsList}>
        {results.map(({ title, thumbnail_url }, idx) => (
            <label key={idx} className={`row nogrow ${styles.resultRow}`}>
                <input
                    type="checkbox"
                    defaultChecked={selected.indexOf(idx) > -1}
                    onChange={() => onClick && onClick(idx)}
                />
                <div className={styles.resultRowImageWrapper}>
                    <img src={thumbnail_url} />
                </div>
                <span>{title}</span>
                <button
                    uxp-variant="action"
                    uxp-quiet="true"
                    onClick={e => {
                        onInfoForImage && onInfoForImage(idx);
                        e.stopPropagation();
                    }}>
                    <img src="assets/dots.png" />
                </button>
            </label>
        ))}
    </div>
);

module.exports = List;
