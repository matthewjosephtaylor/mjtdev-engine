"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOf = void 0;
const entries_1 = require("./entries");
const mapOf = (obj, mapper) => {
    return (0, entries_1.entries)(obj).map((entry) => {
        const [key, value] = entry;
        return mapper(key, value);
    });
};
exports.mapOf = mapOf;
//# sourceMappingURL=mapOf.js.map