import { isDefined, isUndefined } from "@mjtdev/object";
import { Body } from "matter-js";
import { findBody } from "./findBody";
import { toMatterVector } from "./toMatterVector";
export const applyForce = (world, id, force, position) => {
    const body = findBody(world, id);
    if (isUndefined(body)) {
        return;
    }
    const worldSpacePosition = isDefined(position) ? position : body.position;
    // console.log({ worldSpacePosition, force, body });
    Body.applyForce(body, toMatterVector(worldSpacePosition), toMatterVector(force));
};
//# sourceMappingURL=applyForce.js.map