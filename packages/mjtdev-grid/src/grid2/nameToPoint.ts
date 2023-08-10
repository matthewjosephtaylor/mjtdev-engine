import { Point2 } from "@mjtdev/math";


export const nameToPoint = (name: string): Point2 => {
  const [x, y] = name.split(",");
  return [Number(x), Number(y)];
};
