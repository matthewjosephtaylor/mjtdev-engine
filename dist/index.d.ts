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
export { InputListenOptions, Inputs, KeyActions, MouseActionEvent, MouseActions, PointerEventType, } from "@mjtdev/input";
export * from "@mjtdev/math";
export * from "@mjtdev/nlp";
export * from "@mjtdev/noise";
export { Arrays, Keys, Brand, Fixed, FixedArray, FixedBrand, Fixes, Nullable, Objects, Producer, Tuple0, Tuple1, Tuple2, Tuple3, Tuple4, Tuple5, TypeGuard, ValueProducer, ErrorLike, } from "@mjtdev/object";
export * from "@mjtdev/parse";
export * from "@mjtdev/physics";
export * from "@mjtdev/random";
export * from "@mjtdev/reacts";
export * from "@mjtdev/stat";
export * from "@mjtdev/string";
export declare const isErrorLike: (maybe: unknown) => maybe is import("@mjtdev/object").ErrorLike, isErrorType: (value: unknown) => value is Error, tryValue: <T_1>(value: Error | T_1, message?: string | undefined) => T_1, orError: <T>(f: () => T, options?: Partial<{
    message?: string | undefined;
    cause?: unknown;
}> | undefined) => Error | T, chain: <T_16>(initial: T_16, mappers: ((v: T_16) => T_16)[]) => T_16, entries: <O_6 extends object, K_7 extends keyof O_6, V_2 = O_6[K_7]>(obj: O_6) => [K_7, V_2][], filter: <O_10 extends object, K_10 extends keyof O_10, V_4 extends O_10[K_10]>(obj: O_10, predicate: (key: K_10, value: V_4) => boolean) => [K_10, V_4][], first: <O, T_4 extends O>(obj: Readonly<O | Iterator<O, T_4, undefined> | O[]>, typeGuard?: import("@mjtdev/object").TypeGuard<T_4> | undefined) => T_4 | undefined, last: <T_5>(obj: readonly T_5[]) => T_5 | undefined, forEach: <O_9 extends object, K_9 extends keyof O_9>(obj: O_9, consumer: (key: K_9, value: O_9[K_9]) => void, errorHandler?: ((error: unknown, key: K_9, value: O_9[K_9]) => void) | undefined) => void, iff: <T_7, R>(value: T_7, mapper: (v: NonNullable<T_7>) => R) => R | undefined, orElse: <T_13>(o: T_13, e: T_13) => T_13, removeUndefinedValues: <T_14 extends object>(obj: object) => Partial<T_14>, iffTyped: <T_8, R_1, G>(typeGuard: (maybe: unknown) => maybe is G, value: T_8, mapper: (v: T_8 & G) => R_1) => R_1 | undefined, isDefined: <T_9>(obj: T_9 | null | undefined) => obj is NonNullable<T_9>, isUndefined: <T_10>(obj: T_10 | null | undefined) => obj is undefined, omit: <K extends string | number, T_11 extends { [k in K]: unknown; }>(object: T_11, key: K) => Omit<T_11, K>, omitUnsafe: <K_1 extends string | number, T_12 extends { [k_1 in K_1]: unknown; }>(object: T_12, key: K_1) => Omit<T_12, K_1>, toMany: <T_15>(obj: T_15 | Iterable<T_15> | T_15[]) => T_15[], fromEntries: <K_11 extends string | number | symbol, V_5>(entries: readonly (readonly [K_11, V_5])[]) => Record<K_11, V_5>, safe: <R_2>(producer: () => R_2, options?: Partial<{
    quiet: boolean;
    def: R_2;
    onError: import("@mjtdev/object").ValueProducer<string>;
}> | undefined) => R_2 | undefined, safeAsync: <R_3>(producer: () => R_3 | Promise<R_3>, options?: Partial<{
    quiet: boolean;
    def: R_3;
    onError: import("@mjtdev/object").ValueProducer<string>;
}> | undefined) => Promise<R_3 | undefined>, mapValue: <T_19, R_4>(value: T_19, mapper: (value: T_19) => R_4) => R_4, headOf: <O, T_4 extends O>(obj: Readonly<O | Iterator<O, T_4, undefined> | O[]>, typeGuard?: import("@mjtdev/object").TypeGuard<T_4> | undefined) => T_4 | undefined, tailOf: <O_11>(obj: O_11[]) => O_11[] | undefined, restOf: <O_11>(obj: O_11[]) => O_11[] | undefined, times: typeof import("@mjtdev/object/dist/object/times").times, isIterator: <T_2>(maybe: unknown) => maybe is Iterator<T_2, any, undefined>, toMultiMap: <K_13 extends string | number, T_20>(maps: Record<K_13, T_20>[], options?: Partial<{
    compact: boolean;
}> | undefined) => Record<K_13, T_20[]>, timesGen: typeof import("@mjtdev/object/dist/object/timesGen").timesGen, isIterable: typeof import("@mjtdev/object/dist/object/type/isIterable").isIterable, isArrayLike: <T_3>(maybe: unknown) => maybe is ArrayLike<T_3>, iffBrowser: <T_21>(producer: () => T_21) => T_21 | undefined, isBrowser: () => boolean, toPromise: <T_22>(producer: (callback: () => void) => T_22) => Promise<T_22>, all: {
    <T_23>(values: Iterable<T_23 | PromiseLike<T_23>>): Promise<Awaited<T_23>[]>;
    <T_24 extends [] | readonly unknown[]>(values: T_24): Promise<{ -readonly [P in keyof T_24]: Awaited<T_24[P]>; }>;
}, isFunction: (maybe: unknown) => maybe is Function, isEmpty: (value?: string | number | boolean | undefined) => boolean, isNotEmpty: (value?: string | number | boolean | undefined) => boolean, waitTimeout: (ms: number) => Promise<unknown>;
//# sourceMappingURL=index.d.ts.map