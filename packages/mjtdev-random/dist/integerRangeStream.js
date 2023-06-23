import { Randoms } from ".";
export const integerRangeStream = (random) => {
    return (max = 1, min = 0) => {
        return Randoms.randomInteger({
            random,
            minMax: [min, max],
        });
    };
};
//# sourceMappingURL=integerRangeStream.js.map