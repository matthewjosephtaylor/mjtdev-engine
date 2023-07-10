import { isUndefined } from "@mjtdev/object";
export const unPx = (value) => {
    if (isUndefined(value)) {
        return undefined;
    }
    const result = value.replace(/px/i, "");
    return Number(result);
};
//# sourceMappingURL=unPx.js.map