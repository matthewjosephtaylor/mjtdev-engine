export declare const set: <O extends object, K extends keyof O = keyof O, V extends O[K] = O[K]>(obj: O, key: K, value: V) => O & { [k in K]: V; };
export declare const setUnsafe: <O extends object, K extends keyof O = keyof O, V extends O[K] = O[K]>(obj: O, key: K, value: V) => O & { [k in K]: V; };
//# sourceMappingURL=set.d.ts.map