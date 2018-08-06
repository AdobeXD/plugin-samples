/**
 * Kerri Shotts
 *
 * Draws a series of lines by following "turtle graphics" commands:
 * 1. Rename any layer so its name consists of turtle commands separated by ";"s
 * 2. Select one or more of these layers and run the plugin to draw all the lines
 *
 * Instructions include:
 * FD 10       -- go forward 10 pixels in the current direction
 * LT 30       -- turn left 30 degrees
 * RT 30       -- turn right 30 degrees
 * PU          -- "pick up" the pen to move without drawing a line, creating gaps in the pattern
 * PD          -- "put down" the pen, reversing PU
 * PC #88ffaa  -- set the color to #88ffaa
 * PW 7        -- set the stroke width to 7px
 * CP          -- Copy (stamp) the node
 * SO 180      -- Set the turtle's orientation to 180
 * RPT 4; ...; END -- Repeat the instructions four times
 */

const PI = 3.141592653589793;
const { Group, Line, Color } = require('scenegraph');
var commands = require('commands');

/**
 * Generates some random colors
 *
 * @returns {string} the color in hex format
 */
function randomColor() {
    const hexValues = ['00', '33', '66', '99', 'CC', 'FF'];
    const color =
        '#' +
        Array.from(
            { length: 3 },
            _ => hexValues[Math.floor(Math.random() * hexValues.length)]
        ).join('');
    return color;
}

/**
 * Parses an instruction. Right now this is really simple -- split it by spaces!
 *
 * @param {string} instruction
 * @returns {string[]} the opcode and operand
 */
function parseInstruction(instruction) {
    const [opcode, operand] = instruction.trim().split(' ');
    return {
        opcode,
        operand,
    };
}

/**
 * Utility function that returns the center point given bounds
 *
 * @param {Object} [param0 = {}]
 * @property {number} param0.x
 * @property {number} param0.y
 * @property {number} param0.width
 * @property {number} param0.height
 * @returns {{x, y}} the x and y point of the center
 */
function getCenterPointFromBounds({ x, y, width, height } = {}) {
    return {
        x: x + width / 2,
        y: y + height / 2,
    };
}

/**
 * Executes a turtle command
 *
 * @param {any} context
 * @param {any} instruction
 */
function execCommand(context, instruction) {
    const { opcode, operand } = instruction;
    const {
        orientation,
        node,
        nestingLevel,
        nestingInstruction,
        nestedInstructions,
        color,
        down,
        position,
        selection,
    } = context;

    // Handle RPT ... END blocks
    if (nestingLevel > 0) {
        if (opcode === 'END') {
            context.nestingLevel--;
        }
        if (opcode === 'RPT') {
            context.nestingLevel++;
        }
        if (context.nestingLevel > 0) {
            nestedInstructions.push(instruction);
        } else {
            // when we are no longer in a nested context, we'll execute the commands we've been storing
            const { opcode: nestOpcode, operand: nestOperand } = context.nestingInstruction;
            const nestedInstructions = [...context.nestedInstructions];
            context.nestedInstructions = [];
            context.nestingInstruction = undefined;
            switch (nestOpcode) {
                case 'RPT':
                    for (let i = 0; i < Number(nestOperand); i++) {
                        nestedInstructions.forEach(execCommand.bind(undefined, context));
                    }
                    break;
                // imagine: conditional loops!
            }
        }
    } else {
        switch (opcode) {
            //
            // SO, Set Orientation
            // Sets the orientation to the specified degrees.
            case 'SO':
                context.orientation = Number(operand);
                break;
            //
            // CP, CoPy
            // Stamps a duplicate of the selection on the canvas
            // Stamps are given "Stamp #" names
            case 'CP':
                {
                    commands.duplicate();
                    context.stampCounter++;
                    selection.items.forEach(node => {
                        const centerPoint = getCenterPointFromBounds(node.boundsInParent);
                        node.name = `Stamp ${context.stampCounter}`;
                        node.moveInParentCoordinates(
                            position.x - centerPoint.x,
                            position.y - centerPoint.y
                        );
                        node.rotateAround(orientation - node.rotation, node.localCenterPoint);
                    });
                }
                break;
            //
            // PU, Pen Up
            // Lifts the turtle's pen; movement will not leave lines behind
            case 'PU':
                context.down = false;
                break;
            //
            // PD, Pen Down
            // Drops the turtle's pen; movement will leave lines behind.
            case 'PD':
                context.down = true;
                break;
            //
            // PC, set Pen Color
            // Sets the pen's color to the specified color. This can be hex or a color name, or
            // "RC" will set a random color.
            case 'PC':
                if (operand === 'RC') {
                    context.color = randomColor();
                } else {
                    context.color = operand;
                }
                break;
            //
            // PW, set Pen Width
            // Sets the pen's width to the specified width.
            case 'PW':
                context.width = Number(operand);
                break;
            //
            // RPT, RePeaT
            // Repeats anything until the next END the specified number of times.
            // Repeats can be nested.
            case 'RPT':
                context.nestingLevel++;
                context.nestingInstruction = instruction;
                break;
            //
            // FD, ForwarD / BK, BacKward
            // Moves the turtle the specified number of pixels. The direction the turtle moves
            // depends upon its current orientaiton. If the pen is down, the turtle will
            // leave a line using the pen's color and width.
            case 'FD':
            case 'BK':
                {
                    const line = new Line();
                    const dir = opcode === 'FD' ? 1 : -1;
                    const len = Number(operand);
                    const startPoint = position;
                    const endPoint = {
                        x: startPoint.x + len * dir * Math.sin(orientation / (180 / PI)),
                        y: startPoint.y + len * -dir * Math.cos(orientation / (180 / PI)),
                    };

                    if (down) {
                        line.setStartEnd(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
                        line.stroke = new Color(context.color);
                        line.strokeEnabled = true;
                        line.strokeWidth = context.width;
                        selection.insertionParent.addChild(line);
                    }
                    context.position.x += endPoint.x - startPoint.x;
                    context.position.y += endPoint.y - startPoint.y;
                }
                break;
            //
            // RT, RighT / LT, LefT
            // Turns the turtle the specified degrees. This will affect the direction
            // the turtle travels with FD / BK, and will also affect the direction of
            // any stamp (CP) operations.
            case 'RT':
            case 'LT':
                {
                    const orientationDelta = Number(operand);
                    const sign = opcode === 'RT' ? 1 : -1;
                    context.orientation += orientationDelta * sign;
                }
                break;
        }
    }
}

/**
 * Sets up an execution context, and executes the associated instructions.
 *
 * @param {SceneNode} node
 * @param {selection} selection
 * @param {string[]} instructions
 */
function execProgram(node, selection, instructions) {
    const position = getCenterPointFromBounds(node.boundsInParent);
    const context = {
        selection,
        orientation: 0,
        color: 'black',
        down: true,
        width: 2,
        node,
        position,
        stampCounter: 0,
        nestingInstruction: undefined,
        nestedInstructions: [],
        nestingLevel: 0,
    };

    instructions.forEach(execCommand.bind(undefined, context));
}

/**
 * Given a node with instructions as the name, executes the instructions using the node.
 *
 * @param {SceneNode} node
 * @param {selection} selection
 */
function goTurtleGo(node, selection) {
    const instructions = node.name.split(';').map(parseInstruction);
    execProgram(node, selection, instructions);
}

/**
 * Go! Run the turtle instruction for each selected item.
 */
function execute(selection) {
    selection.items.forEach(node => {
        goTurtleGo(node, selection);
    });
}

module.exports = {
    commands: {
        execute,
    },
};
