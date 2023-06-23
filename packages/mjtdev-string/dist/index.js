"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings = void 0;
function match(s1, s2) {
    if (s1 === s2) {
        return true;
    }
    if (typeof s1 === "string" && s2 instanceof RegExp) {
        return s2.test(s1);
    }
    if (typeof s2 === "string" && s1 instanceof RegExp) {
        return s1.test(s2);
    }
    return undefined;
}
/**
 * Calculate a 32 bit FNV-1a hash
 * Found here: https://gist.github.com/vaiorabbit/5657561
 * Ref.: http://isthe.com/chongo/tech/comp/fnv/
 * @see https://stackoverflow.com/a/22429679/5306554
 *
 * @param {string} str the input value
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer | string}
 */
function hashFnv32a({ str, seed }) {
    /*jshint bitwise:false */
    let i, l, hval = seed === undefined ? 0x811c9dc5 : seed;
    for (i = 0, l = str.length; i < l; i++) {
        hval ^= str.charCodeAt(i);
        hval +=
            (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    return hval >>> 0;
}
const toHex = (num) => {
    return ("0000000" + (num >>> 0).toString(16)).substr(-8);
};
const toBytes = (str) => {
    return new Blob([str], { type: "text/plain" });
};
exports.Strings = {
    match,
    hashFnv32a,
    toBytes,
    toHex,
};
//# sourceMappingURL=index.js.map