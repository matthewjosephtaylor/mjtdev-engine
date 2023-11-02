import { isUndefined } from "@mjtdev/object";
import { findBody } from "./findBody";
/** @returns angle in Radians */
export const getRotation = (world, label) => {
    const body = findBody(world, label);
    if (isUndefined(body)) {
        return undefined;
    }
    return body.angle;
};
//# sourceMappingURL=getRotation.js.map