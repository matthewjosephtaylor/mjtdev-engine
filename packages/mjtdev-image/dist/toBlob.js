"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBlob = void 0;
const toHTMLCanvasElement_1 = require("./toHTMLCanvasElement");
const toBlob = async (src, type, quality) => {
    const canvas = await (0, toHTMLCanvasElement_1.toHTMLCanvasElement)(src);
    return new Promise((resolve, reject) => {
        try {
            canvas.toBlob((blob) => {
                resolve(blob);
            }, type, quality);
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.toBlob = toBlob;
//# sourceMappingURL=toBlob.js.map