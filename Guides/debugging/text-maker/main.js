const { Color, Text } = require("scenegraph");
const commands = require("commands");

function textMaker(selection, root) {
  let someText = new Text();
  let someMoreText = new Text();
  makeMyText(
    selection,
    someText,
    "Here is some text.",
    "someText layer",
    50,
    "red",
    100,
    100,
    true
  );
  makeMyText(
    selection,
    someMoreText,
    "Here is some invisible text.",
    "someMoreText layer",
    10,
    "red",
    100,
    200,
    false
  );
}

function makeMyText(
  selection,
  textVariable,
  textString,
  layerName,
  fontsize,
  fillColor,
  textX,
  textY,
  visible
) {
  textVariable.text = textString;
  textVariable.name = layerName;
  textVariable.styleRanges = [
    {
      length: textVariable.text.length,
      fontFamily: "Arial",
      fontStyle: "Regular",
      fontSize: fontsize,
      charSpacing: 0,
      underline: false,
      fill: new Color(fillColor)
    }
  ];
  textVariable.visible = visible;
  selection.insertionParent.addChild(textVariable);
  textVariable.moveInParentCoordinates(textX, textY);
}

function logWithTag(string) {
  const tag = `text-maker_log_`;

  console.log(`${tag} ${string}`);
}

return {
  commands: {
    textMaker
  }
};
