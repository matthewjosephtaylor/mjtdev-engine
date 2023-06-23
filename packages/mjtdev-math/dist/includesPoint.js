import { distancePoint } from "./distancePoint";
export const includesPoint = (points, p) => {
    return points.some((somePoint) => distancePoint(p, somePoint) === 0);
};
//# sourceMappingURL=includesPoint.js.map