import { pointToName } from "./pointToName";
import { normalizePoint } from "./normalizePoint";
import { valueAt } from "./valueAt";
export const updateValue = ({ grid, point, mapper, }) => {
    const normalizedPoint = normalizePoint({ grid, point });
    const updated = mapper(valueAt({ grid, point }));
    grid.values[pointToName(normalizedPoint)] = updated;
};
//# sourceMappingURL=updateValue.js.map