"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extend = void 0;
const fix_1 = require("./fix");
const extend = (arr, value) => {
    const unfixed = [...arr, value];
    return (0, fix_1.fix)(unfixed);
};
exports.extend = extend;
//# sourceMappingURL=extend.js.map