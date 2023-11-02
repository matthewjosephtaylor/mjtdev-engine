import { Body } from "matter-js";
import { findBody } from "./findBody";
import { toMatterVector } from "./toMatterVector";
import { isUndefined } from "@mjtdev/object";
export const setPosition = (world, label, position = [0, 0]) => {
    const body = findBody(world, label);
    if (isUndefined(body)) {
        return;
    }
    Body.setPosition(body, toMatterVector(position));
};
//# sourceMappingURL=setPosition.js.map