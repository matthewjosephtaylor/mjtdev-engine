import { scaler } from "./scaler";
import { Point1 } from "./type/Point";
import { xOf } from "./xOf";


export const scaler1 = (scale: Point1) => {
  const xScaler = scaler(xOf(scale));
  return (value: Point1): Point1 => {
    return [xScaler(xOf(value))];
  };
};
