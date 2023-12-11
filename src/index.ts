export * from "@mjtdev/browser-file";
export * from "@mjtdev/nlp";
export * from "@mjtdev/physics";
export * from "@mjtdev/reacts";
export * from "@mjtdev/cache";
export * from "@mjtdev/idb";
export * from "@mjtdev/stat";
export * from "@mjtdev/html";
export * from "@mjtdev/string";
export * from "@mjtdev/animate";
export * from "@mjtdev/assert";
export * from "@mjtdev/color";
export * from "@mjtdev/byte";
export * from "@mjtdev/grid";
export { Images } from "@mjtdev/image";
export {
  Inputs,
  InputListenOptions,
  KeyActions,
  MouseActionEvent,
  MouseActions,
  PointerEventType,
} from "@mjtdev/input";
export * from "@mjtdev/noise";
export * from "@mjtdev/random";
export * from "@mjtdev/ai";
export * from "@mjtdev/parse";
export * from "@mjtdev/math";
export {
  Objects,
  Arrays,
  Brand,
  Fixed,
  FixedArray,
  FixedBrand,
  Fixes,
  Producer,
  Tuple0,
  Tuple1,
  Tuple2,
  Tuple3,
  Tuple4,
  Tuple5,
  TypeGuard,
  ValueProducer,
  Nullable,
} from "@mjtdev/object";
export * from "@mjtdev/babs";

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
  isEmpty,
  isNotEmpty,
} = Objects;
