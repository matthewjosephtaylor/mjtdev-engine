export * from "./object/type/TypeGuard";
export * from "./object/type/Producer";
export * from "./object/type/Nullable";
export * from "./object/brand/type/Brand";
export * from "./object/Objects";
export * from "./object/Arrays";
export * from "./object/fix/Fixes";
export * from "./object/fix/type/Fixed";
export * from "./object/fix/fix";
export * from "./object/fix/fixObject";
export * from "./object/fix/fixArray";
export * from "./object/fix/extend";
export declare const chain: <T>(initial: T, mappers: ((v: T) => T)[]) => T, entries: <O extends object, K extends keyof O, V = O[K]>(obj: O) => [K, V][], filter: <O extends object, K extends keyof O, V extends O[K]>(obj: O, predicate: (key: K, value: V) => boolean) => [K, V][], first: <O, T extends O>(obj: O | Iterator<O, T, undefined> | O[], typeGuard?: import("./object/type/TypeGuard").TypeGuard<T>) => T | undefined, last: <T>(obj: T[]) => T | undefined, forEach: <O extends object, K extends keyof O>(obj: O, consumer: (key: K, value: O[K]) => void, errorHandler?: (error: unknown, key: K, value: O[K]) => void) => void, iff: <T, R>(value: T, mapper: (v: NonNullable<T>) => R) => R | undefined, orElse: <T>(o: T, e: T) => T, removeUndefinedValues: <T extends object>(obj: object) => Partial<T>, iffTyped: <T, R, G>(typeGuard: (maybe: unknown) => maybe is G, value: T, mapper: (v: T & G) => R) => R | undefined, isDefined: <T>(obj: T | null | undefined) => obj is NonNullable<T>, isUndefined: <T>(obj: T | null | undefined) => obj is undefined, omit: <K extends string | number, T extends { [k in K]: unknown; }>(object: T, key: K) => Omit<T, K>, omitUnsafe: <K extends string | number, T extends { [k in K]: unknown; }>(object: T, key: K) => Omit<T, K>, toMany: <T>(obj: T | Iterable<T> | T[]) => T[], fromEntries: <K extends string | number | symbol, V>(entries: readonly (readonly [K, V])[]) => Record<K, V>, safe: <R>(producer: () => R, options?: Partial<{
    quiet: boolean;
    def: R;
    onError: import("./object/type/Producer").ValueProducer<string>;
}>) => R | undefined, safeAsync: <R>(producer: () => R | Promise<R>, options?: Partial<{
    quiet: boolean;
    def: R;
    onError: import("./object/type/Producer").ValueProducer<string>;
}>) => Promise<R | undefined>, mapValue: <T, R>(value: T, mapper: (value: T) => R) => R, headOf: <O, T extends O>(obj: O | Iterator<O, T, undefined> | O[], typeGuard?: import("./object/type/TypeGuard").TypeGuard<T>) => T | undefined, tailOf: <O>(obj: O[]) => O[] | undefined, restOf: <O>(obj: O[]) => O[] | undefined, times: typeof import("./object/times").times, isIterator: <T>(maybe: unknown) => maybe is Iterator<T, any, undefined>, toMultiMap: <K extends string | number, T>(maps: Record<K, T>[], options?: Partial<{
    compact: boolean;
}>) => Record<K, T[]>, timesGen: typeof import("./object/timesGen").timesGen, isIterable: typeof import("./object/type/isIterable").isIterable, isArrayLike: <T>(maybe: unknown) => maybe is ArrayLike<T>, iffBrowser: <T>(producer: () => T) => T | undefined, isBrowser: () => boolean, toPromise: <T>(producer: (callback: () => void) => T) => Promise<T>, all: {
    <T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;
    <T_1 extends [] | readonly unknown[]>(values: T_1): Promise<{ -readonly [P in keyof T_1]: Awaited<T_1[P]>; }>;
}, isFunction: (maybe: unknown) => maybe is Function, isEmpty: (value?: string | number | boolean | undefined) => boolean, isNotEmpty: (value?: string | number | boolean | undefined) => boolean;
//# sourceMappingURL=index.d.ts.map