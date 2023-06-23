export * from "./object/type/TypeGuard";
export * from "./object/type/Producer";
export * from "./object/brand/type/Brand";

export * from "./object/Objects";
export * from "./object/Arrays";

export * from "./object/fix/Fixes";
export * from "./object/fix/type/Fixed";
export * from "./object/fix/fix";
export * from "./object/fix/fixObject";
export * from "./object/fix/fixArray";
export * from "./object/fix/extend";

import { Objects } from "./object/Objects";

export const {
  chain,
  entries,
  filter,
  first,
  last,
  forEach,
  iff,
  orElse,
  removeUndefinedValues,
  iffTyped,
  isDefined,
  isUndefined,
  omit,
  omitUnsafe,
  toMany,
  fromEntries,
  safe,
  safeAsync,
  mapValue,
  headOf,
  tailOf,
  restOf,
  times,
  isIterator,
  toMultiMap,
  timesGen,
  isIterable,
  isArrayLike,
  iffBrowser,
  isBrowser,
  toPromise,
  all,
  isFunction,
} = Objects;
