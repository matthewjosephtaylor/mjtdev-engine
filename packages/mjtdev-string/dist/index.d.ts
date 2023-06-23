declare function match(s1: string | RegExp, s2: string | RegExp): boolean | undefined;
/**
 * Calculate a 32 bit FNV-1a hash
 * Found here: https://gist.github.com/vaiorabbit/5657561
 * Ref.: http://isthe.com/chongo/tech/comp/fnv/
 * @see https://stackoverflow.com/a/22429679/5306554
 *
 * @param {string} str the input value
 * @param {integer} [seed] optionally pass the hash of the previous chunk
 * @returns {integer | string}
 */
declare function hashFnv32a({ str, seed }: {
    str: string;
    seed?: number;
}): number;
export declare const Strings: {
    match: typeof match;
    hashFnv32a: typeof hashFnv32a;
    toBytes: (str: string) => Blob;
    toHex: (num: number) => string;
};
export {};
//# sourceMappingURL=index.d.ts.map