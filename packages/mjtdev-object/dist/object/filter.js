"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
const filter = (obj, predicate) => {
    return Object.entries(obj).filter((entry) => {
        const [k, v] = entry;
        return predicate(k, v);
    });
};
exports.filter = filter;
//# sourceMappingURL=filter.js.map