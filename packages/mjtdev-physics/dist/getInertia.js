import { isUndefined } from "@mjtdev/object";
import { findBody } from "./findBody";
export const getInertia = (world, label) => {
    const body = findBody(world, label);
    if (isUndefined(body)) {
        return undefined;
    }
    return body.inertia;
};
//# sourceMappingURL=getInertia.js.map