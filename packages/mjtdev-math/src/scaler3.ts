import { scaler } from "./scaler";
import { Point3 } from "./type/Point";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";


export const scaler3 = (scale: Point3) => {
  const xScaler = scaler(xOf(scale));
  const yScaler = scaler(yOf(scale));
  const zScaler = scaler(zOf(scale));
  return (value: Point3): Point3 => {
    return [xScaler(xOf(value)), yScaler(yOf(value)), zScaler(zOf(value))];
  };
};
