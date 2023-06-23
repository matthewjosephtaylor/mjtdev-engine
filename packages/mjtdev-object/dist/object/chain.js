"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chain = void 0;
const chain = (initial, mappers) => {
    return mappers.reduce((acc, mapper) => {
        return mapper(acc);
    }, initial);
};
exports.chain = chain;
//# sourceMappingURL=chain.js.map