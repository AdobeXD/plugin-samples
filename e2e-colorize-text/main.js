/******************************************************************************
 *
 * Colorize Text
 * ----------------
 *
 * Author: Kerri Shotts
 * License: MIT
 *
 * Provides several useful methods for colorizing text:
 *
 *  - Gradient (takes the first and last color and interpolates the gradient
 *    across the entire text element)
 *  - Repeat (takes the first colors found and repeats across the text)
 *  - Random (applies random colors to the text)
 *
 ******************************************************************************/

const {
    Text,
    Color
} = require("scenegraph");

const { alert, warning } = require("./dialogs.js");

/**
 * Given two arrays, return an array like [ [a[0], b[0]], [a[1], b[1], ... ]
 */
function zip(a, b) {
    return a.map((a, idx) => [a, b[idx]]);
}

/**
 * Checks if the two colors provided are the same. Returns `true` if so.
 *
 * @param {Color} a
 * @param {Color} b
 * @returns {boolean}
 */
function sameColor(a, b) {
    return zip([a.r, a.g, a.b, a.a], [b.r, b.g, b.b, b.a])
        .every(([a, b]) => a === b);
}

/**
 * Returns a random color hex string
 *
 * @returns {string}
 */
function randomColor() {
    const hexValues = ['00', '33', '66', '99', 'CC', 'FF'];
    const color = "#" + Array.from({
        length: 3
    }, _ => hexValues[Math.floor(Math.random() * hexValues.length)]).join("");
    return color;
}

/**
 * Gets the style settings for a given character position in a text field.
 * Useful for preserving styles.
 *
 * @param {number} pos
 * @param {Array} styleRanges
 */
function getStyleForPosition(pos, styleRanges) {
    return styleRanges.reduce((state, curStyle) => {
        const {
            start,
            style
        } = state;
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
 * This is the logic for gradientizing text elements.
 *
 * @param {*} selection
 */
function gradientize(selection) {
    let affectedItems = 0;
    let candidateItems = 0;

    selection.items
        // clear out anything that's not a Text element
        .filter(item => item instanceof Text)
        // then iterate over each one so that we can gradientize each text element
        .forEach(text => {
            // keep track of candidate items so we can trigger error messages as appropriate
            candidateItems++;

            // number of characters in the text element (Q: Unicode?)
            const length = text.text.length;
            if (length < 3) {
                // no text (or less than two characters) ? no gradient.
                return;
            }

            // styleRanges is an array of styles within a text field. It's an array of objects
            // with each object containing information about a specific style. Each style is
            // applied to a _range_ of characters. As such, we can extract the first style
            // and the last style, pull out the fill color, and we've got the starting
            // and ending color.
            //
            // This isn't perfect -- _technically_ this just pulls the last _style_, even
            // if it is the same color.
            //
            // the filter will guarantee we're only working with TWO colors at most.
            const colors = text.styleRanges.map(style => style.fill)
                .filter((color, idx, arr) => idx === 0 || idx === arr.length - 1);
            if (colors.length < 2) {
                // only one color? No gradient for you.
                return;
            }

            if (sameColor(colors[0], colors[1])) {
                // definitely only one color ... no need for a gradient.
                return;
            }

            // keep track of the items we affect so we can trigger error messages as appropriate
            affectedItems++;

            const firstColor = colors[0];
            const lastColor = colors[colors.length - 1];

            // next, extract the R, G, and B components from each
            const [startRGBA, endRGBA] = [firstColor, lastColor].map(color => [color.r, color.g, color.b, color.a])

            // calculate the deltas between the starting and ending color for each component, dividing
            // by the number of characters in the text element.
            const deltaRGBA = zip(startRGBA, endRGBA).map(([start, end]) => (end - start) / length);

            // create a new array of styles -- one style per character
            text.styleRanges = Array.from({
                length
            }, (_, step) => {
                // create a new color
                const color = new Color();

                // assign the R, G, and B components based on how many times we've iterated (step)
                [color.r, color.g, color.b, color.a] = startRGBA.map((c, idx) => c + (deltaRGBA[idx] * step));

                // create the individual style range (note the 1 === 1 character), and return it
                // with the new color
                return Object.assign({}, getStyleForPosition(step, text.styleRanges), {
                    length: 1,
                    fill: color
                });
            });
        });
    if (candidateItems === 0 || affectedItems === 0) {
        // we didn't do anything. Why?
        if (selection.items.length === 0 || candidateItems === 0) {
            alert(selection.items.length === 0 ? "Nothing selected..." : "No operable items selected...", "Be sure to select one or more text items.");
            return;
        }

        if (candidateItems > affectedItems) {
            warning("No operable items selected...",
                "Be sure to select text items with the following criteria:",
                "• Text with more than two letters",
                "• Text with two different colors at the first and last character");
            return;
        }
    }
}

/**
 * Repeats a color pattern throughout the text node. How does it work? The idea is simple!
 *
 * 1. get the initial color.
 * 2. Find the next time that color is used.
 * 3. Collect all the colors in between (inclusive of the first)
 * 4. Apply those colors to the remainder of the text string in order
 *
 * @param {*} selection
 */
function repeatize(selection) {
    let candidateItems = 0;
    let affectedItems = 0;

    selection.items.filter(item => item instanceof Text)
        .forEach(item => {
            candidateItems++;

            const text = item.text;
            const length = text.length;

            if (length < 2) {
                // no text (or one character)? no repeat!
                return;
            }

            const colors = item.styleRanges.map(style => style.fill)
                .reduce((acc, color) => {
                    // this will ensure that we coalesce the colors down
                    const last = acc[length - 1];
                    if (!last) {
                        acc.push(color);
                        return acc;
                    }
                    if (!sameColor(last, color)) {
                        acc.push(color);
                    }
                    return acc;
                }, []);

            if (colors.length < 2) {
                // only one color? what's the point?
                return;
            }

            // next, find the place where we repeat our color
            const firstColor = colors[0];
            let stopColorIdx = colors.findIndex((color, idx) =>
                (idx > 0) && sameColor(firstColor, color)
            );

            // assume we want to repeat _all_ the colors in this case...
            if (stopColorIdx < 1) {
                stopColorIdx = colors.length;
            }

            // apply them in sequence (use % to wrap around when needed!)
            item.styleRanges = Array.from({
                length
            }, (_, idx) => {
                const color = colors[idx % stopColorIdx];
                return Object.assign({}, getStyleForPosition(idx, item.styleRanges), {
                    length: 1,
                    fill: color
                });
            });

            affectedItems++;
        });
    if (candidateItems === 0 || affectedItems === 0) {
        // we didn't do anything. Why?
        if (selection.items.length === 0 || candidateItems === 0) {
            alert(selection.items.length === 0 ? "Nothing selected..." : "No operable items selected...", "Be sure to select one or more text items.");
            return;
        }

        if (candidateItems > affectedItems) {
            warning("No operable items selected...",
                "Be sure to select text items with the following criteria:",
                "• Text with more than one character",
                "• Text with at least two different colors");
            return;
        }
    }
}

/**
 * Randomizes the colors within a text node.
 *
 * @param {*} selection
 */
function randomize(selection) {
    let candidateItems = 0;
    let affectedItems = 0;

    selection.items.filter(item => item instanceof Text)
        .forEach(item => {
            candidateItems++;

            const text = item.text;
            const length = text.length;

            if (length < 1) {
                // no text? no randomize!
                return;
            }

            // apply random colors to each letter
            item.styleRanges = Array.from({
                length
            }, (_, idx) => {
                const color = new Color(randomColor());
                return Object.assign({}, getStyleForPosition(idx, item.styleRanges), {
                    length: 1,
                    fill: color
                });
            });

            affectedItems++;
        });

    if (candidateItems === 0 || affectedItems === 0) {
        // we didn't do anything. Why?
        if (selection.items.length === 0 || candidateItems === 0) {
            alert(selection.items.length === 0 ? "Nothing selected..." : "No operable items selected...", "Be sure to select one or more text items.");
            return;
        }

        if (candidateItems > affectedItems) {
            warning("No operable items selected...",
                "Be sure to select text items with the following criteria:",
                "• Text with one or more characters"
            );
            return;
        }
    }
}

/**
 * Show the about dialog
 */
function aboutPlugin() {
    alert("About Colorize Text...",
        "Colorize Text is a plugin that provides several text colorizing utilities:",
        "• Gradient: applies a gradient between the first and last characters in a text node",
        "• Repeat: repeats a color pattern in a text node",
        "• Randomize: applies random colors to each character in a text node",
        "For more information, please see:",
        "https://github.com/AdobeXD/Plugin-Samples/tree/master/e2e-colorize-text"
    );
}

module.exports = {
    commands: {
        gradientize,
        repeatize,
        randomize,
        aboutPlugin
    }
}
