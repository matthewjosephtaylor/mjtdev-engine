import { isDefined } from "./isDefined";
import { fromEntries } from "./fromEntries";
export const fromEntriesToMultimap = (entries) => {
    const keys = Array.from(new Set(entries.map((e) => e[0])));
    const result = fromEntries(keys.map((k) => [k, []]));
    entries.forEach((entry) => {
        const [key, value] = entry;
        if (isDefined(value)) {
            const valueContainer = result[key];
            valueContainer.push(value);
        }
    });
    return result;
};
//# sourceMappingURL=fromEntriesToMultimap.js.map