import { isUndefined } from "@mjtdev/object";
import { findBody } from "./findBody";
import { PhysicsWorld } from "./type/PhysicsTypes";

/** @returns angle in Radians */
export const getRotation = (world: PhysicsWorld, label: string): number => {
  const body = findBody(world, label);
  if (isUndefined(body)) {
    return undefined;
  }
  return body.angle;
};
