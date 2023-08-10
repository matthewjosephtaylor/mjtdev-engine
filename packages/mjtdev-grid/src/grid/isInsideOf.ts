import { Point2 } from "@mjtdev/math";
import { Maths } from "@mjtdev/math";
import { Grids } from "./Grids";
import { isOutsideOf } from "./isOutsideOf";
import { GridObject } from "./type/GridObject";

export const isInsideOf = (spec: {
  cellCount: number;
  position: Point2;
  grid: GridObject;
}) => {
  return !isOutsideOf(spec);
};
