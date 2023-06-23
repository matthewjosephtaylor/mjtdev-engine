import { toVec } from "./toVec";
export const contains = (point, needle) => {
    const values = toVec(point);
    return values.find((v) => v === needle) !== undefined;
};
//# sourceMappingURL=contains.js.map