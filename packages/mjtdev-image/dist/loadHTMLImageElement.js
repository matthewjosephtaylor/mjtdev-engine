"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadHTMLImageElement = void 0;
const loadHTMLImageElement = (src) => {
    const img = document.createElement("img");
    return new Promise((resolve, reject) => {
        img.onload = () => {
            resolve(img);
        };
        img.onerror = (reason) => {
            reject(reason);
        };
        img.src = src;
    });
};
exports.loadHTMLImageElement = loadHTMLImageElement;
//# sourceMappingURL=loadHTMLImageElement.js.map