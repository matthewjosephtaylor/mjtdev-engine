import { Composite } from "matter-js";
import { toMatterVector } from "./toMatterVector";
export const addBody = (world, body) => {
    Composite.add(world, body);
    body.velocity = toMatterVector([0, 0]);
    body.angularVelocity = 0;
};
//# sourceMappingURL=addBody.js.map