import { Maths } from "@mjtdev/math";
import { Grids } from "./Grids";
export const isOutsideOf = ({ position, grid, cellCount, }) => {
    const [x, y] = Maths.toVec(position);
    if (x < 0) {
        return true;
    }
    if (y < 0) {
        return true;
    }
    if (x > Grids.widthOf({ grid })) {
        return true;
    }
    if (y > Grids.heightOf({ grid, cellCount })) {
        return true;
    }
    return false;
};
//# sourceMappingURL=isOutsideOf.js.map