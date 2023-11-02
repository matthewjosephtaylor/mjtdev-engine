import { World, Query } from "matter-js";
import { findBody } from "./findBody";
import { findBodies } from "./findBodies";
import { Point2 } from "@mjtdev/math";
import { toMatterVector } from "./toMatterVector";

export const queryCollisions = (
  world: World,
  needle: string | Point2,
  hayStack: string[]
) => {
  const hs = findBodies(world, (b) => hayStack.includes(b.label));
  if (typeof needle === "string") {
    const n = findBody(world, needle);
    return Query.collides(n, hs);
  }
  return Query.point(hs, toMatterVector(needle));
};
