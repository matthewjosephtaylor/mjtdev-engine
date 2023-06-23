import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { isPoint4 } from "./isPoint4";
import { Point } from "./type/Point";
import { length0 } from "./length0";
import { length1 } from "./length1";
import { length2 } from "./length2";
import { length3 } from "./length3";
import { length4 } from "./length4";


export function lengthPoint(p: Point): number {
  if (isPoint4(p)) {
    return length4(p);
  }
  if (isPoint3(p)) {
    return length3(p);
  }
  if (isPoint2(p)) {
    return length2(p);
  }
  if (isPoint1(p)) {
    return length1(p);
  }
  if (isPoint0(p)) {
    return length0(p);
  }
  return undefined;
}
