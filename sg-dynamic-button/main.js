/**
 * Peter Flynn
 *
 * Sample plugin similar to Sketch's "Dynamic Button" plugin. Updates a frame shape to wrap a text element exactly
 * with a specified amount of padding:
 * 1. Draw a rectangle and change its layer name to the two H/V padding values separated by spaces
 *   (e.g. layer name "20 10" means 20 px of left/right padding and 10 px top/bottom padding)
 * 2. Create a text element of any size
 * 3. Select both and run "Update Button Padding" - the rectangle will be moved & resized to wrap the text with
 *   the exact amount of padding you specified.
 * 4. Change the padding or change the text and redo step 3 to update the frame
 */

/*jshint esnext: true */
/*globals console, require */


function updatePadding(selection, root) {
    var textNode = selection.items[0].text ? selection.items[0] : selection.items[1];
    var rectNode = selection.items[0].text ? selection.items[1] : selection.items[0];

    // Extract H/V padding values from layer name
    var settings = rectNode.name.split(/[ ,]+/);
    var paddingW = parseFloat(settings[0]);
    var paddingH = parseFloat(settings[1]);

    var contentBounds = textNode.boundsInParent;
    rectNode.resize(contentBounds.width + paddingW*2, contentBounds.height + paddingH*2);
    rectNode.placeInParentCoordinates(rectNode.localBounds, {  // move frame's visual top left to appropriate place
        x: contentBounds.x - paddingW,
        y: contentBounds.y - paddingH
    });
}


module.exports = {
    commands: {
        updatePadding: updatePadding
    }
};
