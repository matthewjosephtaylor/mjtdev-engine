import { findBody } from "./findBody";
import { isUndefined } from "@mjtdev/object";
export const getVelocity = (world, label) => {
    const body = findBody(world, label);
    if (isUndefined(body)) {
        return undefined;
    }
    const { x, y } = body.velocity;
    return Object.freeze({ x, y });
};
//# sourceMappingURL=getVelocity.js.map