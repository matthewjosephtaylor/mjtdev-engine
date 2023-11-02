import { isUndefined } from "@mjtdev/object";
import { Composite } from "matter-js";
import { findBody } from "./findBody";
export const removeBody = (world, label) => {
    const body = findBody(world, label);
    if (isUndefined(body)) {
        return;
    }
    Composite.remove(world, body);
};
//# sourceMappingURL=removeBody.js.map