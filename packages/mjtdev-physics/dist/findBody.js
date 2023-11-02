import { Composite } from "matter-js";
export const findBody = (world, labelOrPredicate) => {
    const predicate = typeof labelOrPredicate === "string"
        ? (b) => b.label === labelOrPredicate
        : labelOrPredicate;
    const bodies = Composite.allBodies(world);
    return bodies.find(predicate);
};
//# sourceMappingURL=findBody.js.map