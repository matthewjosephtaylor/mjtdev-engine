import { scaler } from "./scaler";
import { Point0 } from "./type/Point";
import { xOf } from "./xOf";


export const scaler0 = (scale: Point0) => {
  const sf = scaler(xOf(scale));
  return (value: Point0): Point0 => {
    return sf(xOf(value));
  };
};
