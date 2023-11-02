import { Composite } from "matter-js";
export const findBodyByLabel = (world, label) => {
    return Composite.allBodies(world).find((body) => {
        return body?.label === label;
    });
};
//# sourceMappingURL=findBodyByLabel.js.map