import { Objects } from "./Objects";
export const toMultiMap = (maps, options = {}) => {
    const { compact = false } = options;
    return maps.reduce((acc, cur) => {
        Objects.entries(cur).forEach((entry) => {
            const [k, v] = entry;
            const values = acc[k] ?? [];
            acc[k] = compact && values.includes(v) ? values : [...values, v];
        });
        return acc;
    }, {});
};
//# sourceMappingURL=toMultiMap.js.map