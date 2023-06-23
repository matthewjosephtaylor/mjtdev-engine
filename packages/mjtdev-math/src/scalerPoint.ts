import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { isPoint4 } from "./isPoint4";
import { Point } from "./type/Point";
import { scaler4 } from "./scaler4";
import { scaler3 } from "./scaler3";
import { scaler2 } from "./scaler2";
import { scaler1 } from "./scaler1";
import { scaler0 } from "./scaler0";


export const scalerPoint = (scale: Point) => {
  if (isPoint4(scale)) {
    return scaler4(scale);
  }
  if (isPoint3(scale)) {
    return scaler3(scale);
  }
  if (isPoint2(scale)) {
    return scaler2(scale);
  }
  if (isPoint1(scale)) {
    return scaler1(scale);
  }
  if (isPoint0(scale)) {
    return scaler0(scale);
  }
};
