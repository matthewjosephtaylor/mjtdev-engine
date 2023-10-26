import { pointToName } from "./pointToName";
import { normalizePoint } from "./normalizePoint";
export const setValue = ({ grid, point, value, }) => {
    const normalizedPoint = normalizePoint({ grid, point });
    grid.values[pointToName(normalizedPoint)] = value;
};
//# sourceMappingURL=setValue.js.map