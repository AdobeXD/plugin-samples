const React = require('react');

const Card = require('./Card');
const styles = require('./Grid.css');

const Grid = ({ results, selected, onInfoClick, onClick } = {}) => (
    <div className={styles.results}>
        {results.map(({ title, thumbnail_url }, idx) => (
            <Card
                key={idx}
                width={200}
                height={150}
                title={title}
                src={thumbnail_url}
                selected={selected.indexOf(idx) > -1}
                onInfoClick={e => {
                    console.log("click");
                    onInfoClick && onInfoClick(idx);
                    e.stopPropagation();
                }}
                onClick={() => onClick && onClick(idx)}
            />
        ))}
    </div>
);

module.exports = Grid;
