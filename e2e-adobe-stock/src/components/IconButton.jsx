const React = require("react");

const styles = require("./IconButton.css");

module.exports = ({icon: Icon, onClick, disabled, selected, className, title, ...rest}) => (
    <div className={`${styles.button} ${selected ? styles.selected : ""} ${className ? className : ""}`} disabled={disabled} onClick={onClick} title={title}>
        <Icon className={styles.icon} {...rest} />
    </div>
);