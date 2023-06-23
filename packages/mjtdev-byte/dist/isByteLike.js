import { isImmediateByteLike } from "./isImmediateByteLike";
export const isByteLike = (maybe) => {
    if (maybe instanceof Blob) {
        return true;
    }
    return isImmediateByteLike(maybe);
};
//# sourceMappingURL=isByteLike.js.map