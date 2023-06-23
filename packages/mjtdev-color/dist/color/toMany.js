"use strict";
// --- private ---
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMany = void 0;
const toMany = (input) => {
    if (Array.isArray(input)) {
        return input;
    }
    return [input];
};
exports.toMany = toMany;
//# sourceMappingURL=toMany.js.map