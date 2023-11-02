import { Render } from "matter-js";
import { mapValue } from "@mjtdev/object";
export const createRender = (engine, options = {}) => {
    const { canvas = mapValue(document.createElement("canvas"), (c) => {
        (c.width = 1000), (c.height = 1000);
        return c;
    }), } = options;
    return Render.create({
        canvas,
        engine,
        bounds: {
            min: {
                x: -1000,
                y: -1000,
            },
            max: {
                x: 1000,
                y: 1000,
            },
        },
        ...options,
    });
};
//# sourceMappingURL=createRender.js.map