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
exports.Objects = void 0;
const chain_1 = require("./chain");
const entries_1 = require("./entries");
const filter_1 = require("./filter");
const first_1 = require("./first");
const fix_1 = require("./fix/fix");
const forEach_1 = require("./forEach");
const freeze_1 = require("./freeze");
const fromEntries_1 = require("./fromEntries");
const fromEntriesToMultimap_1 = require("./fromEntriesToMultimap");
const get_1 = require("./get");
const hasKey_1 = require("./hasKey");
const headOf_1 = require("./headOf");
const iff_1 = require("./iff");
const iffBrowser_1 = require("./iffBrowser");
const iffTyped_1 = require("./iffTyped");
const includesUndefined_1 = require("./includesUndefined");
const isBrowser_1 = require("./isBrowser");
const isDefined_1 = require("./isDefined");
const isUndefined_1 = require("./isUndefined");
const keys_1 = require("./keys");
const last_1 = require("./last");
const map_1 = require("./map");
const mapOf_1 = require("./mapOf");
const omit_1 = require("./omit");
const orElse_1 = require("./orElse");
const removeUndefinedValues_1 = require("./removeUndefinedValues");
const restOf_1 = require("./restOf");
const safe_1 = require("./safe");
const safeAsync_1 = require("./safeAsync");
const set_1 = require("./set");
const tailOf_1 = require("./tailOf");
const times_1 = require("./times");
const timesGen_1 = require("./timesGen");
const toMany_1 = require("./toMany");
const toMultiMap_1 = require("./toMultiMap");
const toPromise_1 = require("./toPromise");
const tuples_1 = require("./tuples");
const isArrayLike_1 = require("./type/isArrayLike");
const isFunction_1 = require("./type/isFunction");
const isIterable_1 = require("./type/isIterable");
const isIterator_1 = require("./type/isIterator");
const update_1 = require("./update");
const valueOf_1 = require("./valueOf");
const values_1 = require("./values");
exports.Objects = {
    isIterator: isIterator_1.isIterator,
    isArrayLike: isArrayLike_1.isArrayLike,
    times: times_1.times,
    first: first_1.first,
    last: last_1.last,
    fix: fix_1.fix,
    iff: iff_1.iff,
    iffTyped: iffTyped_1.iffTyped,
    includesUndefined: includesUndefined_1.includesUndefined,
    isDefined: isDefined_1.isDefined,
    isUndefined: isUndefined_1.isUndefined,
    omit: omit_1.omit,
    omitUnsafe: omit_1.omitUnsafe,
    orElse: orElse_1.orElse,
    removeUndefinedValues: removeUndefinedValues_1.removeUndefinedValues,
    toMany: toMany_1.toMany,
    set: set_1.set,
    setUnsafe: set_1.setUnsafe,
    get: get_1.get,
    update: update_1.update,
    updateUnsafe: update_1.updateUnsafe,
    entries: entries_1.entries,
    keys: keys_1.keys,
    values: values_1.values,
    forEach: forEach_1.forEach,
    filter: filter_1.filter,
    chain: chain_1.chain,
    fromEntries: fromEntries_1.fromEntries,
    fromEntriesToMultimap: fromEntriesToMultimap_1.fromEntriesToMultimap,
    freeze: freeze_1.freeze,
    hasKey: hasKey_1.hasKey,
    tuple0: tuples_1.tuple0,
    tuple1: tuples_1.tuple1,
    tuple2: tuples_1.tuple2,
    tuple3: tuples_1.tuple3,
    tuple4: tuples_1.tuple4,
    tuple5: tuples_1.tuple5,
    safe: safe_1.safe,
    safeAsync: safeAsync_1.safeAsync,
    valueOf: valueOf_1.valueOf,
    mapValue: map_1.mapValue,
    headOf: headOf_1.headOf,
    tailOf: tailOf_1.tailOf,
    restOf: restOf_1.restOf,
    toMultiMap: toMultiMap_1.toMultiMap,
    timesGen: timesGen_1.timesGen,
    isIterable: isIterable_1.isIterable,
    isBrowser: isBrowser_1.isBrowser,
    iffBrowser: iffBrowser_1.iffBrowser,
    mapOf: mapOf_1.mapOf,
    toPromise: toPromise_1.toPromise,
    all: Promise.all,
    isFunction: isFunction_1.isFunction
};
__exportStar(require("./tuples"), exports);
//# sourceMappingURL=Objects.js.map