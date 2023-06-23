"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSrcString = void 0;
const byte_1 = require("@mjtdev/byte");
const image_js_1 = __importDefault(require("image-js"));
const toSrcString = (imageLike) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (typeof imageLike === "string") {
                resolve(imageLike);
                return;
            }
            if (imageLike instanceof HTMLImageElement) {
                resolve(imageLike.src);
                return;
            }
            if (imageLike instanceof HTMLVideoElement) {
                resolve(imageLike.src);
                return;
            }
            if (imageLike instanceof HTMLCanvasElement) {
                resolve(imageLike.toDataURL());
                return;
            }
            const arrayBuffer = await byte_1.Bytes.toArrayBuffer(imageLike);
            const ijs = await image_js_1.default.load(arrayBuffer);
            resolve(ijs.toDataURL());
        }
        catch (reason) {
            reject(reason);
        }
    });
};
exports.toSrcString = toSrcString;
//# sourceMappingURL=toSrcString.js.map