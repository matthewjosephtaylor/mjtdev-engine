import { PointObject2 } from "@mjtdev/math";
import { findBody } from "./findBody";
import { PhysicsWorld } from "./type/PhysicsTypes";
import { isUndefined } from "@mjtdev/object";

export const getVelocity = (
  world: PhysicsWorld,
  label: string
): PointObject2 => {
  const body = findBody(world, label);
  if (isUndefined(body)) {
    return undefined;
  }
  const { x, y } = body.velocity;
  return Object.freeze({ x, y });
};
