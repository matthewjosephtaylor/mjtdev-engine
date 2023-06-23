"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iffBrowser = void 0;
const isBrowser_1 = require("./isBrowser");
const iffBrowser = (producer) => {
    return (0, isBrowser_1.isBrowser)() ? producer() : undefined;
};
exports.iffBrowser = iffBrowser;
//# sourceMappingURL=iffBrowser.js.map