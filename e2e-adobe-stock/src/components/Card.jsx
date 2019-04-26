const React = require("react");
const styles = require("./Card.css");

const DraggableImage = require("./DraggableImage");

const Card = ({
    selected = false,
    src,
    width = 200,
    height = 150,
    children,
    onInfoClick,
    ...rest
} = {}) => {
    return (
        <div
            className={`${styles.cardWrapper} ${selected ? styles.selected : styles.unselected}`}
            style={{ height, width }}
            {...rest}>
            <div className={styles.cardHero} style={{ width }}>
                <img className={styles.cardHeroImg} style={{ height }} src={src} />
                <button onClick={onInfoClick} className={styles.cardHeroInfo} uxp-variant="action">
                    <img src="./assets/info.png" />
                </button>
            </div>
            {children}
        </div>
    );
};

module.exports = Card;