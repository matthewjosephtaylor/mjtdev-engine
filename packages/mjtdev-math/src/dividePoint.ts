import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { isPoint4 } from "./isPoint4";
import { Point } from "./type/Point";
import { divide4 } from "./divide4";
import { divide3 } from "./divide3";
import { divide2 } from "./divide2";
import { divide1 } from "./divide1";
import { divide0 } from "./divide0";


export const dividePoint = (a: Point, b: Point): Point => {
  if (isPoint4(a) && isPoint4(b)) {
    return divide4(a, b);
  }
  if (isPoint3(a) && isPoint3(b)) {
    return divide3(a, b);
  }
  if (isPoint2(a) && isPoint2(b)) {
    return divide2(a, b);
  }
  if (isPoint1(a) && isPoint1(b)) {
    return divide1(a, b);
  }
  if (isPoint0(a) && isPoint0(b)) {
    return divide0(a, b);
  }
  return undefined;
};
