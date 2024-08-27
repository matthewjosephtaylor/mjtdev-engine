export * from "./object/brand/type/Brand";
export * from "./object/type/ErrorLike";
export * from "./object/type/Nullable";
export * from "./object/type/Producer";
export * from "./object/type/TypeGuard";
export * from "./object/Arrays";
export * from "./object/Objects";
export * from "./object/fix/Fixes";
export * from "./object/fix/extend";
export * from "./object/fix/fix";
export * from "./object/fix/fixArray";
export * from "./object/fix/fixObject";
export * from "./object/fix/type/Fixed";
import { Objects } from "./object/Objects";
export * from "./key/Keys";
export * from "./object/typebox/TypeBoxes";
export const { isErrorLike, chain, entries, filter, first, last, forEach, iff, orElse, removeUndefinedValues, iffTyped, isDefined, isUndefined, omit, omitUnsafe, toMany, fromEntries, safe, safeAsync, mapValue, headOf, tailOf, restOf, times, isIterator, toMultiMap, timesGen, isIterable, isArrayLike, iffBrowser, isBrowser, toPromise, all, isFunction, isEmpty, isNotEmpty, tryValue, orError, isErrorType, createSettler, } = Objects;
//# sourceMappingURL=index.js.map