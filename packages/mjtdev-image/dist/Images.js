"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Images = void 0;
const from_1 = require("./from");
const loadHTMLImageElement_1 = require("./loadHTMLImageElement");
const toBlob_1 = require("./toBlob");
const toHTMLCanvasElement_1 = require("./toHTMLCanvasElement");
const toHTMLImageElement_1 = require("./toHTMLImageElement");
const toSrcString_1 = require("./toSrcString");
exports.Images = {
    toHTMLImageElement: toHTMLImageElement_1.toHTMLImageElement,
    toHTMLCanvasElement: toHTMLCanvasElement_1.toHTMLCanvasElement,
    loadHTMLImageElement: loadHTMLImageElement_1.loadHTMLImageElement,
    toSrcString: toSrcString_1.toSrcString,
    from: from_1.from,
    toBlob: toBlob_1.toBlob,
};
//# sourceMappingURL=Images.js.map