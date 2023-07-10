import { isUndefined } from "@mjtdev/object";
export const px = (value) => {
    if (isUndefined(value)) {
        return undefined;
    }
    return `${value}px`;
};
//# sourceMappingURL=px.js.map