import { Query } from "matter-js";
import { findBody } from "./findBody";
import { findBodies } from "./findBodies";
import { toMatterVector } from "./toMatterVector";
export const queryCollisions = (world, needle, hayStack) => {
    const hs = findBodies(world, (b) => hayStack.includes(b.label));
    if (typeof needle === "string") {
        const n = findBody(world, needle);
        return Query.collides(n, hs);
    }
    return Query.point(hs, toMatterVector(needle));
};
//# sourceMappingURL=queryCollisions.js.map