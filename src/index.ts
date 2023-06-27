export * from "@mjtdev/math";
export * from "@mjtdev/string";
export * from "@mjtdev/animate";
export * from "@mjtdev/assert";
export * from "@mjtdev/color";
export * from "@mjtdev/image";
export * from "@mjtdev/input";
export * from "@mjtdev/noise";
export * from "@mjtdev/object";
export * from "@mjtdev/babs";
export * from "@mjtdev/random";


import { Objects } from "@mjtdev/object";

// general convenience functions
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
