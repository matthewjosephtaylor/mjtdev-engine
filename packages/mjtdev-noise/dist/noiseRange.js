import { noiseStream } from ".";
export const noiseRange = (seed = 0) => {
    const random = seed === undefined ? (x = 0.5) => x : noiseStream(seed);
    return (max = 1, min = 0) => {
        return min + random() * (max - min);
    };
};
//# sourceMappingURL=noiseRange.js.map