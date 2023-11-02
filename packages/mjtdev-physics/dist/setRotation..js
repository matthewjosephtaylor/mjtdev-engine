import { isUndefined } from "@mjtdev/object";
import { Body } from "matter-js";
import { findBody } from "./findBody";
export const setRotation = (world, id, rotation) => {
    const body = findBody(world, id);
    if (isUndefined(body)) {
        return;
    }
    Body.setAngle(body, rotation);
};
//# sourceMappingURL=setRotation..js.map