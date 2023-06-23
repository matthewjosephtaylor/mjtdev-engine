import { isDefined } from "./isDefined";
export const iff = (value, mapper) => {
    if (isDefined(value)) {
        return mapper(value);
    }
    return undefined;
};
//# sourceMappingURL=iff.js.map