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
export * from "./key/Keys";
export * from "./object/typebox/TypeBoxes";
export declare const isErrorLike: (maybe: unknown) => maybe is import("./object/type/ErrorLike").ErrorLike, chain: <T>(initial: T, mappers: ((v: T) => T)[]) => T, entries: <O extends object, K extends keyof O, V = O[K]>(obj: O) => [K, V][], filter: <O extends object, K extends keyof O, V extends O[K]>(obj: O, predicate: (key: K, value: V) => boolean) => [K, V][], first: <O, T extends O>(obj: Readonly<O[] | O | Iterator<O, T>>, typeGuard?: import("./object/type/TypeGuard").TypeGuard<T>) => T | undefined, last: <T>(obj: Readonly<T[]>) => T | undefined, forEach: <O extends object, K extends keyof O>(obj: O, consumer: (key: K, value: O[K]) => void, errorHandler?: (error: unknown, key: K, value: O[K]) => void) => void, iff: <T, R>(value: T, mapper: (v: NonNullable<T>) => R) => R | undefined, orElse: <T>(o: T, e: T) => T, removeUndefinedValues: <T extends object>(obj: object) => Partial<T>, iffTyped: <T, R, G>(typeGuard: (maybe: unknown) => maybe is G, value: T, mapper: (v: T & G) => R) => R | undefined, isDefined: <T>(obj: T | undefined | null) => obj is NonNullable<T>, isUndefined: <T>(obj: T | undefined | null) => obj is undefined, omit: <K extends string | number, T extends { [k in K]: unknown; }>(object: T, key: K) => Omit<T, K>, omitUnsafe: <K extends string | number, T extends { [k in K]: unknown; }>(object: T, key: K) => Omit<T, K>, toMany: <T>(obj: T | T[] | Iterable<T>) => T[], fromEntries: <K extends string | number | symbol, V>(entries: readonly (readonly [K, V])[]) => Record<K, V>, safe: <R>(producer: () => R, options?: Partial<{
    quiet: boolean;
    def: R;
    onError: import("./object/type/Producer").ValueProducer<string>;
}>) => R | undefined, safeAsync: <R>(producer: () => Promise<R> | R, options?: Partial<{
    quiet: boolean;
    def: R;
    onError: import("./object/type/Producer").ValueProducer<string>;
}>) => Promise<R | undefined>, mapValue: <T, R>(value: T, mapper: (value: T) => R) => R, headOf: <O, T extends O>(obj: Readonly<O[] | O | Iterator<O, T>>, typeGuard?: import("./object/type/TypeGuard").TypeGuard<T>) => T | undefined, tailOf: <O>(obj: O[]) => O[] | undefined, restOf: <O>(obj: O[]) => O[] | undefined, times: typeof import("./object/times").times, isIterator: <T>(maybe: unknown) => maybe is Iterator<T>, toMultiMap: <K extends string | number, T>(maps: Record<K, T>[], options?: Partial<{
    compact: boolean;
}>) => Record<K, T[]>, timesGen: typeof import("./object/timesGen").timesGen, isIterable: typeof import("./object/type/isIterable").isIterable, isArrayLike: <T>(maybe: unknown) => maybe is ArrayLike<T>, iffBrowser: <T>(producer: () => T) => T | undefined, isBrowser: () => boolean, toPromise: <T>(producer: (callback: () => void) => T) => Promise<T>, all: {
    <T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;
    <T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]>; }>;
}, isFunction: (maybe: unknown) => maybe is Function, isEmpty: (value?: string | boolean | number | undefined) => boolean, isNotEmpty: (value?: string | boolean | number | undefined) => boolean, tryValue: <T>(value: T | Error, message?: string) => T, orError: <T>(f: () => T, options?: Partial<{
    message?: string;
    cause?: unknown;
}>) => T | Error, isErrorType: (value: unknown) => value is Error, createSettler: <T>({ settleAction, settledAfterMs, }: {
    settledAfterMs: number;
    settleAction: (value: T) => unknown;
}) => {
    update: (value: T) => void;
};
//# sourceMappingURL=index.d.ts.map