import { Point2 } from "@mjtdev/math";
import { Body } from "matter-js";
import { findBody } from "./findBody";
import { toMatterVector } from "./toMatterVector";
import { PhysicsWorld } from "./type/PhysicsTypes";
import { isUndefined } from "@mjtdev/object";

export const setVelocity = (
  world: PhysicsWorld,
  label: string,
  velocity = [0, 0] as Point2
) => {
  const body = findBody(world, label);
  if (isUndefined(body)) {
    return;
  }
  Body.setVelocity(body, toMatterVector(velocity));
};
