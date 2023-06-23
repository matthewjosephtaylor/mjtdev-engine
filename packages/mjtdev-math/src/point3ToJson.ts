import { toVec3 } from "./toVec3";
import { Point3 } from "./type/Point";


export function point3ToJson(point3: Point3): string {
  if (point3 === undefined) {
    return undefined;
  }
  const [x, y, z] = toVec3(point3);
  // @ts-ignore
  const f = Intl.NumberFormat({ notation: "compact" });
  return `[${f.format(x)},${f.format(y)},${f.format(z)}]`;
}
