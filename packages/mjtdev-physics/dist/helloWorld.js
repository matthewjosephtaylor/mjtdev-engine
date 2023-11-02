import { createEngine } from "./createEngine";
import { mapValue } from "@mjtdev/object";
import { Physics } from "./Physics";
export const helloWorld = ({ engine = createEngine({ gravity: { y: 0.0001 } }), canvas = mapValue(document.createElement("canvas"), (c) => {
    (c.width = 1080), (c.height = 1080);
    return c;
}), run = true, } = {}) => {
    const world = engine.world;
    const a = Physics.getBodyType(world, "rectangle", "a", {
        width: 80,
        height: 80,
        position: [400, 200],
    });
    const b = Physics.getBodyType(world, "rectangle", "b", {
        width: 80,
        height: 80,
        position: [450, 50],
    });
    const c = Physics.getBodyType(world, "rectangle", "c", {
        width: 810,
        height: 60,
        position: [400, 610],
        isStatic: true,
    });
    if (run) {
        const render = Physics.createRender(engine, { canvas });
        Physics.runRender(render);
        Physics.runRunner(engine);
        return { engine, canvas, render };
    }
    return { engine, canvas };
};
//# sourceMappingURL=helloWorld.js.map