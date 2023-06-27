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
export declare function hashFnv32a({ str, seed }: {
    str: string;
    seed?: number;
}): number;
//# sourceMappingURL=hashFnv32a.d.ts.map