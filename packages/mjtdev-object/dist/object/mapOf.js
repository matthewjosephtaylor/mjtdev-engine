import { entries } from "./entries";
export const mapOf = (obj, mapper) => {
    return entries(obj).map((entry) => {
        const [key, value] = entry;
        return mapper(key, value);
    });
};
//# sourceMappingURL=mapOf.js.map