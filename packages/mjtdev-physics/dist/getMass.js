import { isUndefined } from "@mjtdev/object";
import { findBody } from "./findBody";
export const getMass = (world, label) => {
    const body = findBody(world, label);
    if (isUndefined(body)) {
        return undefined;
    }
    return body.mass;
};
//# sourceMappingURL=getMass.js.map