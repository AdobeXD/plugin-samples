const React = require("react");
const IconButton = require("./IconButton");
const InfoIcon = require("../assets/dots.svg").default;
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
                <IconButton
                    title="More information..."
                    onClick={onInfoClick}
                    className={styles.cardHeroInfo}
                    icon={InfoIcon}/>
            </div>
            {children}
        </div>
    );
};

module.exports = Card;