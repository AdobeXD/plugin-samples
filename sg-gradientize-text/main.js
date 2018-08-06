/******************************************************************************
 *
 * Gradientize Text
 * ----------------
 *
 * Given a text element where the first and last characters have a specific
 * color, this plugin will interpolate all the other colors between and apply
 * them to each character in betwen the first and last character in the
 * text field.
 *
 * NOTES: Does not respect alpha / opacity.
 *
 * IMPROVEMENTS:
 *
 * - Could allow multiple color stops within the text element
 * - Would HSL be better?
 * - Respect opacity
 *
 ******************************************************************************/

const {Text, Color} = require("scenegraph");

/**
 * Utility function
 *
 * Given two arrays, return an array like [ [a[0], b[0]], [a[1], b[1], ... ]
 */
function zip (a, b) {
    return a.map((a, idx) => [a, b[idx]]);
}

function getStyleForPosition(pos, styleRanges) {
    return styleRanges.reduce((state, curStyle) => {
        const {start, style} = state;
        const end = start + (curStyle.length - 1);
        return {
            start: start + curStyle.length,
            style: pos >= start && pos <= end ? curStyle : style
        };
    }, {
        start: 0,
        style: {}
    }).style;
}

/**
 * Do it! Do it now!
 *
 * This is the logic for gradientizing text elements.
 *
 * @param {*} selection
 */
function execute(selection) {
    selection.items
        // clear out anything that's not a Text element
        .filter(item => item instanceof Text)
        // then iterate over each one so that we can gradientize each text element
        .forEach(text => {
            // number of characters in the text element (Q: Unicode?)
            const length = text.text.length;
            if (length < 1) {
                // no text? no gradient.
                return;
            }

            // styleRanges is an array of styles within a text field. It's an array of objects
            // with each object containing information about a specific style. Each style is
            // applied to a _range_ of characters. As such, we can extract the first style
            // and the last style, pull out the fill color, and we've got the starting
            // and ending color.
            const colors = text.styleRanges.map(style => style.fill);
            if (colors.length < 2) {
                // only oe color? No gradient for you.
                return;
            }

            const firstColor = colors[0];
            const lastColor = colors[colors.length - 1];

            // next, extract the R, G, and B components from each
            const [startRGB, endRGB] = [firstColor, lastColor].map(color => [color.r, color.g, color.b])

            // calculate the deltas between the starting and ending color for each component, dividing
            // by the number of characters in the text element.
            const deltaRGB = zip(startRGB, endRGB).map(([start, end]) => (end - start)/length);

            // create a new array of styles -- one style per character
            text.styleRanges = Array.from({length}, (_, step) => {
                // create a new color
                const color = new Color();

                // assign the R, G, and B components based on how many times we've iterated (step)
                [ color.r, color.g, color.b ] = startRGB.map((c, idx) => c + (deltaRGB[idx] * step));

                // create the individual style range (note the 1 === 1 character), and return it
                // with the new color
                return Object.assign({}, getStyleForPosition(step, text.styleRanges), {
                    length: 1,
                    fill: color
                });
            });
        });
}

module.exports = {
    commands: {
        execute
    }
}

