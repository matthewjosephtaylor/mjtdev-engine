import { times } from "./times";
import { timesGen } from "./timesGen";
import { isIterable } from "./type/isIterable";
import { parseIncompleteJson } from "./parseIncompleteJson";
export declare const Objects: {
    isErrorLike: (maybe: unknown) => maybe is import("..").ErrorLike;
    orError: <T>(f: () => T, options?: Partial<{
        message?: string;
        cause?: unknown;
    }>) => T | Error;
    tryValue: <T>(value: T | Error, message?: string) => T;
    isErrorType: (value: unknown) => value is Error;
    isEmpty: (value?: string | boolean | number | undefined) => boolean;
    isNotEmpty: (value?: string | boolean | number | undefined) => boolean;
    isIterator: <T>(maybe: unknown) => maybe is Iterator<T>;
    isArrayLike: <T>(maybe: unknown) => maybe is ArrayLike<T>;
    times: typeof times;
    first: <O, T extends O>(obj: Readonly<O[] | O | Iterator<O, T>>, typeGuard?: import("..").TypeGuard<T>) => T | undefined;
    last: <T>(obj: Readonly<T[]>) => T | undefined;
    fix: <T>(v: T) => import("..").Fixed<T> | undefined;
    iff: <T, R>(value: T, mapper: (v: NonNullable<T>) => R) => R | undefined;
    iffTyped: <T, R, G>(typeGuard: (maybe: unknown) => maybe is G, value: T, mapper: (v: T & G) => R) => R | undefined;
    includesUndefined: (...arr: unknown[]) => true | undefined;
    isDefined: <T>(obj: T | undefined | null) => obj is NonNullable<T>;
    isUndefined: <T>(obj: T | undefined | null) => obj is undefined;
    omit: <K extends string | number, T extends { [k in K]: unknown; }>(object: T, key: K) => Omit<T, K>;
    omitUnsafe: <K extends string | number, T extends { [k in K]: unknown; }>(object: T, key: K) => Omit<T, K>;
    orElse: <T>(o: T, e: T) => T;
    removeUndefinedValues: <T extends object>(obj: object) => Partial<T>;
    toMany: <T>(obj: T | T[] | Iterable<T>) => T[];
    set: <O extends object, K extends keyof O = keyof O, V extends O[K] = O[K]>(obj: O, key: K, value: V) => O & { [k in K]: V; };
    setUnsafe: <O extends object, K extends keyof O = keyof O, V extends O[K] = O[K]>(obj: O, key: K, value: V) => O & { [k in K]: V; };
    get: <O extends object, K extends keyof O = keyof O>(obj: O, key: K, defaultValue?: O[K] | undefined) => O[K] | undefined;
    update: <O extends object, K extends keyof O>(obj: O, key: K, mapper: (value: O[K]) => O[K]) => O;
    updateUnsafe: <O extends object, K extends keyof O>(obj: O, key: K, mapper: (value: O[K]) => O[K]) => O;
    entries: <O extends object, K extends keyof O, V = O[K]>(obj: O) => [K, V][];
    keys: <O extends object, K extends keyof O>(obj: O) => K[];
    values: <O extends object, V = O[keyof O]>(obj: O) => V[];
    forEach: <O extends object, K extends keyof O>(obj: O, consumer: (key: K, value: O[K]) => void, errorHandler?: (error: unknown, key: K, value: O[K]) => void) => void;
    filter: <O extends object, K extends keyof O, V extends O[K]>(obj: O, predicate: (key: K, value: V) => boolean) => [K, V][];
    chain: <T>(initial: T, mappers: ((v: T) => T)[]) => T;
    fromEntries: <K extends string | number | symbol, V>(entries: readonly (readonly [K, V])[]) => Record<K, V>;
    fromEntriesToMultimap: <K extends string | number | symbol, V>(entries: [K, V][]) => Record<K, V[]>;
    freeze: <T>(v: T) => Readonly<T | undefined>;
    hasKey: (obj: Record<string, any>, key: string | string[]) => boolean;
    tuple0: () => [];
    tuple1: <A>(a: A) => import("./tuples").Tuple1<A>;
    tuple2: <A, B>(a: A, b: B) => import("./tuples").Tuple2<A, B>;
    tuple3: <A, B, C>(a: A, b: B, c: C) => import("./tuples").Tuple3<A, B, C>;
    tuple4: <A, B, C, D>(a: A, b: B, c: C, d: D) => import("./tuples").Tuple4<A, B, C, D>;
    tuple5: <A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E) => import("./tuples").Tuple5<A, B, C, D, E>;
    safe: <R>(producer: () => R, options?: Partial<{
        quiet: boolean;
        def: R;
        onError: import("..").ValueProducer<string>;
    }>) => R | undefined;
    safeAsync: <R>(producer: () => Promise<R> | R, options?: Partial<{
        quiet: boolean;
        def: R;
        onError: import("..").ValueProducer<string>;
    }>) => Promise<R | undefined>;
    valueOf: <T>(valueProducer: import("..").ValueProducer<T>) => T;
    mapValue: <T, R>(value: T, mapper: (value: T) => R) => R;
    headOf: <O, T extends O>(obj: Readonly<O[] | O | Iterator<O, T>>, typeGuard?: import("..").TypeGuard<T>) => T | undefined;
    tailOf: <O>(obj: O[]) => O[] | undefined;
    restOf: <O>(obj: O[]) => O[] | undefined;
    toMultiMap: <K extends string | number, T>(maps: Record<K, T>[], options?: Partial<{
        compact: boolean;
    }>) => Record<K, T[]>;
    timesGen: typeof timesGen;
    isIterable: typeof isIterable;
    isBrowser: () => boolean;
    iffBrowser: <T>(producer: () => T) => T | undefined;
    mapOf: <K extends string | number | symbol, V, R>(obj: Record<K, V>, mapper: (key: K, value: V) => R) => R[];
    toPromise: <T>(producer: (callback: () => void) => T) => Promise<T>;
    all: {
        <T>(values: Iterable<T | PromiseLike<T>>): Promise<Awaited<T>[]>;
        <T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]>; }>;
    };
    isFunction: (maybe: unknown) => maybe is Function;
    toNumber: (value: string) => number | undefined;
    toBoolean: (value: string | undefined) => boolean;
    waitTimeout: (ms: number) => Promise<unknown>;
    createSettler: <T>({ settleAction, settledAfterMs, }: {
        settledAfterMs: number;
        settleAction: (value: T) => unknown;
    }) => {
        update: (value: T) => void;
    };
    parseIncompleteJson: typeof parseIncompleteJson;
};
export * from "./tuples";
//# sourceMappingURL=Objects.d.ts.map