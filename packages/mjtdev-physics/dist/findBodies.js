import { Composite } from "matter-js";
export const findBodies = (world, labelOrPredicate) => {
    const predicate = typeof labelOrPredicate === "string"
        ? (b) => b.label === labelOrPredicate
        : labelOrPredicate;
    const bodies = Composite.allBodies(world);
    return bodies.filter(predicate);
};
//# sourceMappingURL=findBodies.js.map