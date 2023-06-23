import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { Point } from "./type/Point";
import { multiply3 } from "./multiply3";
import { multiply2 } from "./multiply2";
import { multiply1 } from "./multiply1";
import { multiply0 } from "./multiply0";


export function multiplyPoint(a: Point, b: Point): Point {
  if (isPoint3(a) && isPoint3(b)) {
    return multiply3(a, b);
  }
  if (isPoint2(a) && isPoint2(b)) {
    return multiply2(a, b);
  }
  if (isPoint1(a) && isPoint1(b)) {
    return multiply1(a, b);
  }
  if (isPoint0(a) && isPoint0(b)) {
    return multiply0(a, b);
  }
  return undefined;
}
