"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMultiMap = void 0;
const Objects_1 = require("./Objects");
const toMultiMap = (maps, options = {}) => {
    const { compact = false } = options;
    return maps.reduce((acc, cur) => {
        Objects_1.Objects.entries(cur).forEach((entry) => {
            const [k, v] = entry;
            const values = acc[k] ?? [];
            acc[k] = compact && values.includes(v) ? values : [...values, v];
        });
        return acc;
    }, {});
};
exports.toMultiMap = toMultiMap;
//# sourceMappingURL=toMultiMap.js.map