import { Point2 } from "@mjtdev/math";
import { Body } from "matter-js";
import { findBody } from "./findBody";
import { toMatterVector } from "./toMatterVector";
import { PhysicsWorld } from "./type/PhysicsTypes";
import { isUndefined } from "@mjtdev/object";

export const setPosition = (
  world: PhysicsWorld,
  label: string,

  position = [0, 0] as Point2
) => {
  const body = findBody(world, label);
  if (isUndefined(body)) {
    return;
  }
  Body.setPosition(body, toMatterVector(position));
};
