"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEntriesToMultimap = void 0;
const isDefined_1 = require("./isDefined");
const fromEntries_1 = require("./fromEntries");
const fromEntriesToMultimap = (entries) => {
    const keys = Array.from(new Set(entries.map((e) => e[0])));
    const result = (0, fromEntries_1.fromEntries)(keys.map((k) => [k, []]));
    entries.forEach((entry) => {
        const [key, value] = entry;
        if ((0, isDefined_1.isDefined)(value)) {
            const valueContainer = result[key];
            valueContainer.push(value);
        }
    });
    return result;
};
exports.fromEntriesToMultimap = fromEntriesToMultimap;
//# sourceMappingURL=fromEntriesToMultimap.js.map