const { Text, Color } = require("scenegraph");
const fs = require("localFileSystem").localFileSystem;

async function loadText(selection) {
	const [aFile] = await fs.getFileForOpening();
	const contents = await aFile.read();
	const text = new Text();
	text.text = contents;
	text.styleRanges = [
		{
			length: text.text.length,
			fill: new Color("#0000ff"),
			fontSize: 40
		}
	];
	selection.insertionParent.addChild(text);
	text.moveInParentCoordinates(100, 100);
}

return {
	commands: { loadText }
};