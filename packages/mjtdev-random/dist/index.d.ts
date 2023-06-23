export type NextRandom = {
    (): number;
};
type MinMax = [number, number];
export declare const seedRandom: (seed: number) => NextRandom;
declare function randomUuid(random?: NextRandom): string;
type RandomIntegerConfig = {
    minMax: MinMax;
    random: NextRandom;
};
declare function randomInteger(config?: Partial<RandomIntegerConfig>): number;
declare function pickRandom<T>(oneOrMany: T | Array<T> | Readonly<Array<T>>, nextRandom?: NextRandom): T;
declare function pickRandomNeighbors(sourceArray: Array<any>, count: number, nextRandom?: NextRandom): any[];
declare function shuffle<T>(oneOrMany: T | Array<T>, random?: NextRandom): Array<T>;
export declare const Randoms: {
    seedRandom: (seed: number) => NextRandom;
    globalRandom: NextRandom;
    randomInteger: typeof randomInteger;
    randomUuid: typeof randomUuid;
    pickRandom: typeof pickRandom;
    pickRandoms: <T>({ from, count, nextRandom, random, forceUnique, }: {
        from: T | T[] | readonly T[];
        count: number;
        nextRandom?: NextRandom;
        random?: NextRandom;
        forceUnique?: boolean;
    }) => T[];
    pickRandomNeighbors: typeof pickRandomNeighbors;
    shuffle: typeof shuffle;
    integerRangeStream: (random: NextRandom) => (max?: number, min?: number) => number;
};
export {};
//# sourceMappingURL=index.d.ts.map