import { isUndefined } from "@mjtdev/object";
import { findBody } from "./findBody";
import { PhysicsWorld } from "./type/PhysicsTypes";

export const getMass = (world: PhysicsWorld, label: string): number => {
  const body = findBody(world, label);
  if (isUndefined(body)) {
    return undefined;
  }
  return body.mass;
};
