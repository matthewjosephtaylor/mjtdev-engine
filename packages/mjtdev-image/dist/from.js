"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.from = void 0;
const image_js_1 = __importDefault(require("image-js"));
const loadHTMLImageElement_1 = require("./loadHTMLImageElement");
const toHTMLCanvasElement_1 = require("./toHTMLCanvasElement");
const object_1 = require("@mjtdev/object");
// @ts-ignore Fucking Buffer
// globalThis["Buffer"] = { isBuffer: () => false };
const from = async (src) => {
    const canvas = await (0, toHTMLCanvasElement_1.toHTMLCanvasElement)(src);
    let ijs = image_js_1.default.fromCanvas(canvas);
    const builder = {
        update: (updater) => {
            ijs = updater(ijs);
            return builder;
        },
        toDataURL: () => {
            return ijs.toDataURL();
        },
        toBlob: () => {
            return ijs.toBlob();
        },
        get: (getter) => {
            return getter(ijs);
        },
        toHtmlImageElement: () => {
            return (0, loadHTMLImageElement_1.loadHTMLImageElement)(ijs.toDataURL());
        },
        mapPixels: (mapper) => {
            const { width, height } = ijs;
            return (0, object_1.times)(width * height, (i) => {
                return mapper(ijs.getPixel(i));
            });
        },
    };
    return builder;
};
exports.from = from;
//# sourceMappingURL=from.js.map