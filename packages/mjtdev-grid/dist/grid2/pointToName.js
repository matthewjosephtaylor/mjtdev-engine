import { Maths } from "@mjtdev/math";
export const pointToName = (point) => {
    const [x, y] = Maths.toVec2(point);
    return `${x},${y}`;
};
//# sourceMappingURL=pointToName.js.map