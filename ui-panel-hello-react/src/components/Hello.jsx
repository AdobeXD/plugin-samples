const React = require("react");

const styles = require("./Hello.css");

const Hello = ({text = "World"} = {}) => (
    <h3 className={styles.hello}>{`Hello, ${text}`.toUpperCase()}</h3>
);

module.exports = Hello;