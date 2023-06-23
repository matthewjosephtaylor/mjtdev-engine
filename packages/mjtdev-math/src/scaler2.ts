import { scaler } from "./scaler";
import { Point2 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";


export const scaler2 = (scale: Point2) => {
  const xScaler = scaler(xOf(scale));
  const yScaler = scaler(yOf(scale));
  return (value: Point2): Point2 => {
    return [xScaler(xOf(value)), yScaler(yOf(value))];
  };
};
