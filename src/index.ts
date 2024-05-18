export * from "@mjtdev/ai";
export * from "@mjtdev/animate";
export * from "@mjtdev/assert";
export * from "@mjtdev/babs";
export * from "@mjtdev/browser-file";
export * from "@mjtdev/byte";
export * from "@mjtdev/cache";
export * from "@mjtdev/color";
export * from "@mjtdev/grid";
export * from "@mjtdev/html";
export * from "@mjtdev/idb";
export { Images } from "@mjtdev/image";
export {
  InputListenOptions,
  Inputs,
  KeyActions,
  MouseActionEvent,
  MouseActions,
  PointerEventType,
} from "@mjtdev/input";
export * from "@mjtdev/math";
export * from "@mjtdev/nlp";
export * from "@mjtdev/noise";
export {
  Arrays,
  Brand,
  Fixed,
  FixedArray,
  FixedBrand,
  Fixes,
  Nullable,
  Objects,
  Producer,
  Tuple0,
  Tuple1,
  Tuple2,
  Tuple3,
  Tuple4,
  Tuple5,
  TypeGuard,
  ValueProducer,
  ErrorLike,
} from "@mjtdev/object";
export * from "@mjtdev/parse";
export * from "@mjtdev/physics";
export * from "@mjtdev/random";
export * from "@mjtdev/reacts";
export * from "@mjtdev/stat";
export * from "@mjtdev/string";

import { Objects } from "@mjtdev/object";

// general convenience functions
export const {
  isErrorLike,
  isErrorType,
  tryValue,
  orError,
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
  waitTimeout,
} = Objects;
