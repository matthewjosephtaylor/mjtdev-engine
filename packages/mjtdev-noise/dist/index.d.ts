/**
 * @returns 'random' 32bit unsigned
 */
export declare function noise(seed: number): number;
/**
 * creates a hash number using noise function
 * @param data
 * @returns
 */
export declare function noiseHash(data: number[]): number;
/**
 * @returns number between 0 and 1
 */
export declare function noiseUnit(seed: number): number;
/**
 * @param position will be converted to 32bit unsigned
 * @returns 'random' boolean
 */
export declare function noiseBoolean(position: number): boolean;
export declare function noiseStream(seed?: number): () => number;
/**
 *
 * @param position
 * @see https://www.youtube.com/watch?v=LWFzPP8ZbdU&t=2666s
 */
declare function squirrel3(position: number): number;
export * from "./type/SerializableNoiseState";
export declare const Noises: {
    seed: (seed: any) => void;
    perlin2: (x: number, y: number) => number;
    perlin3: (x: any, y: any, z: any) => number;
    simplex2: (x: number, y: number) => number;
    simplex3: (x: number, y: number, z: number) => number;
    squirrel3: typeof squirrel3;
    noise: typeof noise;
    noiseHash: typeof noiseHash;
    noiseUnit: typeof noiseUnit;
    noiseBoolean: typeof noiseBoolean;
    noiseStream: typeof noiseStream;
    noiseRange: (seed?: number) => (max?: number, min?: number) => number;
    serializableNoiseStream: (state: Partial<import("./type/SerializableNoiseState").SerializableNoiseState>) => () => number;
};
//# sourceMappingURL=index.d.ts.map