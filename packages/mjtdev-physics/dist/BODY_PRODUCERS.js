import { Bodies } from "matter-js";
export const BODY_PRODUCERS = {
    circle: ({ x = 0, y = 0, width, radius = width / 2 }) => Bodies.circle(x, y, radius),
    polygon: ({ x = 0, y = 0, width, sides = 4, radius = width / 2 }) => Bodies.polygon(x, y, sides, radius),
    rectangle: ({ x = 0, y = 0, height = 1, width = 1 }) => Bodies.rectangle(x, y, width, height),
    trapezoid: ({ x = 0, y = 0, height = 1, width = 1, slope = 1 }) => Bodies.trapezoid(x, y, width, height, slope),
    vertex: ({ x = 0, y = 0, vertexSets = [] }) => Bodies.fromVertices(x, y, vertexSets),
};
//# sourceMappingURL=BODY_PRODUCERS.js.map