import { Point } from "./type/Point";
import { includesPoint } from "./includesPoint";

export const removeDuplicatePoints = <P extends Point>(points: P[]): P[] => {
  const result: P[] = [];
  points.forEach((p) => {
    if (includesPoint(result, p)) {
      return;
    }
    result.push(p);
  });
  return result;
};
