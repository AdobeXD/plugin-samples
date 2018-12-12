
if (window.setTimeout == null) {
    window.setTimeout = function (fn) { fn() };
}

if (window.clearTimeout == null) {
    window.clearTimeout = function () { };
}

if (window.cancelAnimationFrame == null) {
    window.cancelAnimationFrame = function () { };
}
if (window.requestAnimationFrame == null) {
    window.requestAnimationFrame = function () {
        console.log("requestAnimationFrame is not supported yet");
    }
}
if (window.HTMLIFrameElement == null) {
    window.HTMLIFrameElement = class HTMLIFrameElement { };
}