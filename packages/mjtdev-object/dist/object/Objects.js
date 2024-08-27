import { chain } from "./chain";
import { entries } from "./entries";
import { filter } from "./filter";
import { first } from "./first";
import { fix } from "./fix/fix";
import { forEach } from "./forEach";
import { freeze } from "./freeze";
import { fromEntries } from "./fromEntries";
import { fromEntriesToMultimap } from "./fromEntriesToMultimap";
import { get } from "./get";
import { hasKey } from "./hasKey";
import { headOf } from "./headOf";
import { iff } from "./iff";
import { iffBrowser } from "./iffBrowser";
import { iffTyped } from "./iffTyped";
import { includesUndefined } from "./includesUndefined";
import { isBrowser } from "./isBrowser";
import { isDefined } from "./isDefined";
import { isEmpty } from "./isEmpty";
import { isNotEmpty } from "./isNotEmpty";
import { isUndefined } from "./isUndefined";
import { keys } from "./keys";
import { last } from "./last";
import { mapValue } from "./map";
import { mapOf } from "./mapOf";
import { omit, omitUnsafe } from "./omit";
import { orElse } from "./orElse";
import { orError } from "./orError";
import { removeUndefinedValues } from "./removeUndefinedValues";
import { restOf } from "./restOf";
import { safe } from "./safe";
import { safeAsync } from "./safeAsync";
import { set, setUnsafe } from "./set";
import { tailOf } from "./tailOf";
import { times } from "./times";
import { timesGen } from "./timesGen";
import { toBoolean } from "./toBoolean";
import { toMany } from "./toMany";
import { toMultiMap } from "./toMultiMap";
import { toNumber } from "./toNumber";
import { toPromise } from "./toPromise";
import { tryValue } from "./tryValue";
import { tuple0, tuple1, tuple2, tuple3, tuple4, tuple5 } from "./tuples";
import { isArrayLike } from "./type/isArrayLike";
import { isErrorLike } from "./type/isErrorLike";
import { isErrorType } from "./type/isErrorType";
import { isFunction } from "./type/isFunction";
import { isIterable } from "./type/isIterable";
import { isIterator } from "./type/isIterator";
import { update, updateUnsafe } from "./update";
import { valueOf } from "./valueOf";
import { values } from "./values";
import { waitTimeout } from "./waitTimeout";
import { createSettler } from "./createSettler";
import { parseIncompleteJson } from "./parseIncompleteJson";
export const Objects = {
    isErrorLike,
    orError,
    tryValue,
    isErrorType,
    isEmpty,
    isNotEmpty,
    isIterator,
    isArrayLike,
    times,
    first,
    last,
    fix,
    iff,
    iffTyped,
    includesUndefined,
    isDefined,
    isUndefined,
    omit,
    omitUnsafe,
    orElse,
    removeUndefinedValues,
    toMany,
    set,
    setUnsafe,
    get,
    update,
    updateUnsafe,
    entries,
    keys,
    values,
    forEach,
    filter,
    chain,
    fromEntries,
    fromEntriesToMultimap,
    freeze,
    hasKey,
    tuple0,
    tuple1,
    tuple2,
    tuple3,
    tuple4,
    tuple5,
    safe,
    safeAsync,
    valueOf,
    mapValue,
    headOf,
    tailOf,
    restOf,
    toMultiMap,
    timesGen,
    isIterable,
    isBrowser,
    iffBrowser,
    mapOf,
    toPromise,
    all: Promise.all,
    isFunction,
    toNumber,
    toBoolean,
    waitTimeout,
    createSettler,
    parseIncompleteJson,
};
export * from "./tuples";
//# sourceMappingURL=Objects.js.map