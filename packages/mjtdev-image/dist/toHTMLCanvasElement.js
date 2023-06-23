"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHTMLCanvasElement = void 0;
const toHTMLImageElement_1 = require("./toHTMLImageElement");
const toHTMLCanvasElement = async (src) => {
    if (src instanceof HTMLCanvasElement) {
        return src;
    }
    const image = await (0, toHTMLImageElement_1.toHTMLImageElement)(src);
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    canvas.getContext("2d").drawImage(image, 0, 0);
    return canvas;
};
exports.toHTMLCanvasElement = toHTMLCanvasElement;
//# sourceMappingURL=toHTMLCanvasElement.js.map