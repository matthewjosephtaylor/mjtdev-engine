import { findBody } from "./findBody";
import { isUndefined } from "@mjtdev/object";
export const getPosition = (world, label) => {
    const body = findBody(world, label);
    if (isUndefined(body)) {
        return undefined;
    }
    const { x, y } = body.position;
    return Object.freeze({ x, y });
};
//# sourceMappingURL=getPosition.js.map