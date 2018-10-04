
//  this is a temporary shim for the latest versions of react.
if (window.cancelAnimationFrame == null) {
    window.cancelAnimationFrame = function() {
    };
}
if (window.requestAnimationFrame == null) {
    window.requestAnimationFrame = function() {
        console.log("requestAnimationFrame is not supported yet");
    }
}
if (window.HTMLIFrameElement == null) {
    window.HTMLIFrameElement = class HTMLIFrameElement {
    };
}