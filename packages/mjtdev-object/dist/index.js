"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunction = exports.all = exports.toPromise = exports.isBrowser = exports.iffBrowser = exports.isArrayLike = exports.isIterable = exports.timesGen = exports.toMultiMap = exports.isIterator = exports.times = exports.restOf = exports.tailOf = exports.headOf = exports.mapValue = exports.safeAsync = exports.safe = exports.fromEntries = exports.toMany = exports.omitUnsafe = exports.omit = exports.isUndefined = exports.isDefined = exports.iffTyped = exports.removeUndefinedValues = exports.orElse = exports.iff = exports.forEach = exports.last = exports.first = exports.filter = exports.entries = exports.chain = void 0;
__exportStar(require("./object/type/TypeGuard"), exports);
__exportStar(require("./object/type/Producer"), exports);
__exportStar(require("./object/brand/type/Brand"), exports);
__exportStar(require("./object/Objects"), exports);
__exportStar(require("./object/Arrays"), exports);
__exportStar(require("./object/fix/Fixes"), exports);
__exportStar(require("./object/fix/type/Fixed"), exports);
__exportStar(require("./object/fix/fix"), exports);
__exportStar(require("./object/fix/fixObject"), exports);
__exportStar(require("./object/fix/fixArray"), exports);
__exportStar(require("./object/fix/extend"), exports);
const Objects_1 = require("./object/Objects");
exports.chain = Objects_1.Objects.chain, exports.entries = Objects_1.Objects.entries, exports.filter = Objects_1.Objects.filter, exports.first = Objects_1.Objects.first, exports.last = Objects_1.Objects.last, exports.forEach = Objects_1.Objects.forEach, exports.iff = Objects_1.Objects.iff, exports.orElse = Objects_1.Objects.orElse, exports.removeUndefinedValues = Objects_1.Objects.removeUndefinedValues, exports.iffTyped = Objects_1.Objects.iffTyped, exports.isDefined = Objects_1.Objects.isDefined, exports.isUndefined = Objects_1.Objects.isUndefined, exports.omit = Objects_1.Objects.omit, exports.omitUnsafe = Objects_1.Objects.omitUnsafe, exports.toMany = Objects_1.Objects.toMany, exports.fromEntries = Objects_1.Objects.fromEntries, exports.safe = Objects_1.Objects.safe, exports.safeAsync = Objects_1.Objects.safeAsync, exports.mapValue = Objects_1.Objects.mapValue, exports.headOf = Objects_1.Objects.headOf, exports.tailOf = Objects_1.Objects.tailOf, exports.restOf = Objects_1.Objects.restOf, exports.times = Objects_1.Objects.times, exports.isIterator = Objects_1.Objects.isIterator, exports.toMultiMap = Objects_1.Objects.toMultiMap, exports.timesGen = Objects_1.Objects.timesGen, exports.isIterable = Objects_1.Objects.isIterable, exports.isArrayLike = Objects_1.Objects.isArrayLike, exports.iffBrowser = Objects_1.Objects.iffBrowser, exports.isBrowser = Objects_1.Objects.isBrowser, exports.toPromise = Objects_1.Objects.toPromise, exports.all = Objects_1.Objects.all, exports.isFunction = Objects_1.Objects.isFunction;
//# sourceMappingURL=index.js.map