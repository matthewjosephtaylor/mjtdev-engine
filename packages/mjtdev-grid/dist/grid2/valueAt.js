import { pointToName } from "./pointToName";
export const valueAt = (gridPoint) => {
    const { grid, point } = gridPoint;
    const namedPoint = pointToName(point);
    return grid.values[namedPoint];
};
//# sourceMappingURL=valueAt.js.map