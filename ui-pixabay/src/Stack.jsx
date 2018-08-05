const React = require("react");

const Stack = ({
    direction = 'row',
    grow = 0,
    shrink = 0,
    style: otherStyles = {},
    children = [],
    ...rest
} = {}) => {
    return (
        <div
            style={Object.assign(
                {},
                {
                    display: 'flex',
                    flexDirection: direction,
                    flexGrow: grow,
                    flexShrink: shrink,
                },
                otherStyles
            )}
            {...rest}>
            {children}
        </div>
    );
};

module.exports = Stack;
