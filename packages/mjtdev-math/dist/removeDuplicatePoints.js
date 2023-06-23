import { includesPoint } from "./includesPoint";
export const removeDuplicatePoints = (points) => {
    const result = [];
    points.forEach((p) => {
        if (includesPoint(result, p)) {
            return;
        }
        result.push(p);
    });
    return result;
};
//# sourceMappingURL=removeDuplicatePoints.js.map