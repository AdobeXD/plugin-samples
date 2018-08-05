const React = require("react");
const Stack = require("./Stack.jsx");

const styles = {
    cardWrapper: {
        margin: 12,
        borderRadius: 8,
        backgroundColor: "#D0D0D0",
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 200,
        overflow: "hidden",
    },

    cardHero: {
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        overflow: "hidden",

        flexBasis: 0,
        height: "66%",
        backgroundColor: "#E0E0E0",
    },

    cardHeroImg:  {
        margin: "auto",
    },

    selected: {
        border:"2px solid blue",
    },

    unselected: {
        border: "2px solid transparent",
    }
}

const Card = ({
    selected = false,
    src,
    width = 200,
    height = 150,
    children,
    ...rest
} = {}) => {
    return (
        <div
            style={Object.assign({}, { height, width }, styles.cardWrapper, selected ? styles.selected : styles.unselected)}
            {...rest}>
            <div style={styles.cardHero} style={{ width: width - 4 }}>
                <img style={Object.assign({}, styles.cardHeroImg, {height: 100})} src={src} />
            </div>
            {children}
        </div>
    );
};

module.exports = Card;