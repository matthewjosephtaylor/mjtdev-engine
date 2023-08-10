import { pointToName } from "./pointToName";
import { normalizePoint } from "./normalizePoint";
export const updateValue = ({ grid, point, value, }) => {
    const normalizedPoint = normalizePoint({ grid, point });
    grid.values[pointToName(normalizedPoint)] = value;
};
//# sourceMappingURL=updateValue.js.map