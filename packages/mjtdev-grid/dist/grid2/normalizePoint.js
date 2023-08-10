import { Maths } from "@mjtdev/math";
export const normalizePoint = ({ grid = {}, point = [0, 0], }) => {
    const { cellWidth = 1, cellHeight = 1 } = grid;
    const [x = 0, y = 0] = Maths.toVec2(point);
    return [
        Math.floor(x / cellWidth) * cellWidth,
        Math.floor(y / cellHeight) * cellHeight,
    ];
};
//# sourceMappingURL=normalizePoint.js.map