const React = require("react");

// NOTE: THE DRAG AND DROP APIS ARE IN FLUX; DO NOT USE.

function dragStart(event) {
    console.log("here");
    const target = event.target;
    const dataTransfer = event.dataTransfer;
    const mimeType = target.dataset.dragMimeType || "image/jpg";
    dataTransfer.effectAllowed = "all";
    const dragItem = new DataTransferItem();
    dragItem.set("text/uri-list", target.src); //file:/// or data:base64,png;asdfasf
    dragItem.set("text/html", `<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"><img alt="Image" src="${target.src}"/>`);
    dataTransfer.items.push(dragItem);
    dragItem.element = target;
}

function dragEnd(event) {

}

const DraggableImage = ({src, ...rest} = {}) => (
    <img draggable="true" onDragStart={dragStart} onDragEnd={dragEnd} src={src} {...rest} />
);

module.exports = DraggableImage;