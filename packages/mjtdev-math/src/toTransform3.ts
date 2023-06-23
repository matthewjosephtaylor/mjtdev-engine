import { toVec3 } from "./toVec3";
import { Transform3 } from "./type/Transform3";

export const toTransform3 = (o3: Partial<Transform3>): Transform3 => {
  const {
    scale: os = [1, 1, 1],
    rotation: or = [0, 0, 0],
    position: op = [0, 0, 0],
  } = o3;

  const scale = toVec3(os);
  const rotation = toVec3(or);
  const position = toVec3(op);
  return {
    scale,
    position,
    rotation,
  };
};
