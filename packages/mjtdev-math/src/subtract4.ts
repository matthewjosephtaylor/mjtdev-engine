import { Point4 } from "./type/Point";
import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";


export function subtract4(a: Point4, b: Point4): Point4 {
  if (b === undefined) {
    return a;
  }
  if (a === undefined) {
    return b;
  }
  return [xOf(a) - xOf(b), yOf(a) - yOf(b), zOf(a) - zOf(b), wOf(a) - wOf(b)];
}
