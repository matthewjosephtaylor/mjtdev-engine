import { iff } from "./iff";
export const iffTyped = (typeGuard, value, mapper) => {
    if (typeGuard(value)) {
        return iff(value, mapper);
    }
    return undefined;
};
//# sourceMappingURL=iffTyped.js.map