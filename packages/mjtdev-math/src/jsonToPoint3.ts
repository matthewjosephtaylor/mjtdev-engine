import { Point3 } from "./type/Point";


export function jsonToPoint3(json: string): Point3 {
  if (json === undefined) {
    return undefined;
  }
  return JSON.parse(json);
}
