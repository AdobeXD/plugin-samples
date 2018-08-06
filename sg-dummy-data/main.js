/**
 * Peter Flynn
 * Primitive dummy data generator - select a text node containing a number (how many copies) followed by a letter:
 *    n = numbered-list sequential ordering
 *    p = phone number
 *    s = US state abbreviation
 * This will duplicate the text node to create N copies total (including the original) and replace the text with dummy
 * data. For example "10p" will generate 10 total text nodes containing random phone numbers.
 */

var commands = require("commands");

function generateDummyData(selection) {
    var original = selection.items[0];
    var numTimes = parseInt(original.text);
    var mode = original.text.match(/[a-zA-Z]/)[0].toLowerCase();

    function rand(max) {
        return Math.floor(Math.random() * (max || 10));
    }
    const states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    function getString(i) {
        switch (mode) {
            case "n":
                return String(i + 1);
            case "p":
                return "(" + rand() + rand() + rand() + ") " + rand() + rand() + rand() + "-" + rand() + rand() + rand() + rand();
            case "s":
                return states[rand(50)];
        }
    }

    var allCopies = [original];
    for (var i = 1; i < numTimes; i++) {
        // Create duplicate of node
        selection.items = [original];
        commands.duplicate();
        var clone = selection.items[0];

        // Move node below previous nodes, with 10px padding
        clone.moveInParentCoordinates(0, (clone.localBounds.height + 10) * i);
        clone.text = getString(i);
        allCopies.push(clone);
    }
    original.text = getString(0);
    selection.items = allCopies;
}

module.exports = {
    commands: {
        generateDummyData: generateDummyData
    }
};