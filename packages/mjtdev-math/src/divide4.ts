import { Point4 } from "./type/Point";
import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
import { contains } from "./contains";


export function divide4(a: Point4, b: Point4): Point4 {
  if (b === undefined || contains(b, 0)) {
    return undefined;
  }
  if (a === undefined) {
    return undefined;
  }
  return [xOf(a) / xOf(b), yOf(a) / yOf(b), zOf(a) / zOf(b), wOf(a) / wOf(b)];
}
