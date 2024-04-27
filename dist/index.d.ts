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
export { Inputs, InputListenOptions, KeyActions, MouseActionEvent, MouseActions, PointerEventType, } from "@mjtdev/input";
export * from "@mjtdev/noise";
export * from "@mjtdev/random";
export * from "@mjtdev/ai";
export * from "@mjtdev/parse";
export * from "@mjtdev/math";
export { Objects, Arrays, Brand, Fixed, FixedArray, FixedBrand, Fixes, Producer, Tuple0, Tuple1, Tuple2, Tuple3, Tuple4, Tuple5, TypeGuard, ValueProducer, Nullable, } from "@mjtdev/object";
export * from "@mjtdev/babs";
export declare const chain: <T_14>(initial: T_14, mappers: ((v: T_14) => T_14)[]) => T_14, entries: <O_6 extends object, K_7 extends keyof O_6, V_2 = O_6[K_7]>(obj: O_6) => [K_7, V_2][], filter: <O_10 extends object, K_10 extends keyof O_10, V_4 extends O_10[K_10]>(obj: O_10, predicate: (key: K_10, value: V_4) => boolean) => [K_10, V_4][], first: <O, T_2 extends O>(obj: O | Iterator<O, T_2, undefined> | O[], typeGuard?: import("@mjtdev/object").TypeGuard<T_2> | undefined) => T_2 | undefined, last: <T_3>(obj: T_3[]) => T_3 | undefined, forEach: <O_9 extends object, K_9 extends keyof O_9>(obj: O_9, consumer: (key: K_9, value: O_9[K_9]) => void, errorHandler?: ((error: unknown, key: K_9, value: O_9[K_9]) => void) | undefined) => void, iff: <T_5, R>(value: T_5, mapper: (v: NonNullable<T_5>) => R) => R | undefined, orElse: <T_11>(o: T_11, e: T_11) => T_11, removeUndefinedValues: <T_12 extends object>(obj: object) => Partial<T_12>, iffTyped: <T_6, R_1, G>(typeGuard: (maybe: unknown) => maybe is G, value: T_6, mapper: (v: T_6 & G) => R_1) => R_1 | undefined, isDefined: <T_7>(obj: T_7 | null | undefined) => obj is NonNullable<T_7>, isUndefined: <T_8>(obj: T_8 | null | undefined) => obj is undefined, omit: <K extends string | number, T_9 extends { [k in K]: unknown; }>(object: T_9, key: K) => Omit<T_9, K>, omitUnsafe: <K_1 extends string | number, T_10 extends { [k_1 in K_1]: unknown; }>(object: T_10, key: K_1) => Omit<T_10, K_1>, toMany: <T_13>(obj: T_13 | Iterable<T_13> | T_13[]) => T_13[], fromEntries: <K_11 extends string | number | symbol, V_5>(entries: readonly (readonly [K_11, V_5])[]) => Record<K_11, V_5>, safe: <R_2>(producer: () => R_2, options?: Partial<{
    quiet: boolean;
    def: R_2;
    onError: import("@mjtdev/object").ValueProducer<string>;
}> | undefined) => R_2 | undefined, safeAsync: <R_3>(producer: () => R_3 | Promise<R_3>, options?: Partial<{
    quiet: boolean;
    def: R_3;
    onError: import("@mjtdev/object").ValueProducer<string>;
}> | undefined) => Promise<R_3 | undefined>, mapValue: <T_17, R_4>(value: T_17, mapper: (value: T_17) => R_4) => R_4, headOf: <O, T_2 extends O>(obj: O | Iterator<O, T_2, undefined> | O[], typeGuard?: import("@mjtdev/object").TypeGuard<T_2> | undefined) => T_2 | undefined, tailOf: <O_11>(obj: O_11[]) => O_11[] | undefined, restOf: <O_11>(obj: O_11[]) => O_11[] | undefined, times: typeof import("@mjtdev/object/dist/object/times").times, isIterator: <T>(maybe: unknown) => maybe is Iterator<T, any, undefined>, toMultiMap: <K_13 extends string | number, T_18>(maps: Record<K_13, T_18>[], options?: Partial<{
    compact: boolean;
}> | undefined) => Record<K_13, T_18[]>, timesGen: typeof import("@mjtdev/object/dist/object/timesGen").timesGen, isIterable: typeof import("@mjtdev/object/dist/object/type/isIterable").isIterable, isArrayLike: <T_1>(maybe: unknown) => maybe is ArrayLike<T_1>, iffBrowser: <T_19>(producer: () => T_19) => T_19 | undefined, isBrowser: () => boolean, toPromise: <T_20>(producer: (callback: () => void) => T_20) => Promise<T_20>, all: {
    <T_21>(values: Iterable<T_21 | PromiseLike<T_21>>): Promise<Awaited<T_21>[]>;
    <T_22 extends [] | readonly unknown[]>(values: T_22): Promise<{ -readonly [P in keyof T_22]: Awaited<T_22[P]>; }>;
}, isFunction: (maybe: unknown) => maybe is Function, isEmpty: (value: string | number | boolean) => boolean, isNotEmpty: (value: string) => boolean, waitTimeout: (ms: number) => Promise<unknown>;
//# sourceMappingURL=index.d.ts.map