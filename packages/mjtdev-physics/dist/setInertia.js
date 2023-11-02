import { Body } from "matter-js";
import { findBody } from "./findBody";
import { isUndefined } from "@mjtdev/object";
export const setInertia = (world, label, inertia = 0) => {
    const body = findBody(world, label);
    if (isUndefined(body)) {
        return;
    }
    Body.setInertia(body, inertia);
};
//# sourceMappingURL=setInertia.js.map