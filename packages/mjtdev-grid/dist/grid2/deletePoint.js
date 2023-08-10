import { pointToName } from "./pointToName";
import { normalizePoint } from "./normalizePoint";
export const deletePoint = ({ grid, point }) => {
    const normalizedPoint = normalizePoint({ grid, point });
    delete grid.values[pointToName(normalizedPoint)];
};
//# sourceMappingURL=deletePoint.js.map