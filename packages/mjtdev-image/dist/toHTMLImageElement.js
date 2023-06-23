"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHTMLImageElement = void 0;
const byte_1 = require("@mjtdev/byte");
const image_js_1 = __importDefault(require("image-js"));
const loadHTMLImageElement_1 = require("./loadHTMLImageElement");
const toHTMLCanvasElement_1 = require("./toHTMLCanvasElement");
const toHTMLImageElement = async (src) => {
    if (src instanceof HTMLImageElement) {
        return src;
    }
    if (typeof src === "string") {
        return (0, loadHTMLImageElement_1.loadHTMLImageElement)(src);
    }
    if (src instanceof HTMLCanvasElement) {
        return (0, loadHTMLImageElement_1.loadHTMLImageElement)(src.toDataURL());
    }
    if (src instanceof HTMLVideoElement) {
        return (0, exports.toHTMLImageElement)(await (0, toHTMLCanvasElement_1.toHTMLCanvasElement)(src));
    }
    return new Promise(async (resolve, reject) => {
        try {
            const arrayBuffer = await byte_1.Bytes.toArrayBuffer(src);
            const ijs = await image_js_1.default.load(arrayBuffer);
            resolve((0, loadHTMLImageElement_1.loadHTMLImageElement)(ijs.toDataURL()));
        }
        catch (reason) {
            reject(reason);
        }
    });
};
exports.toHTMLImageElement = toHTMLImageElement;
//# sourceMappingURL=toHTMLImageElement.js.map