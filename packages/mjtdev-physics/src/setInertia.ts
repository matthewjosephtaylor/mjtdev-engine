import { Body } from "matter-js";
import { findBody } from "./findBody";
import { PhysicsWorld } from "./type/PhysicsTypes";
import { isUndefined } from "@mjtdev/object";

export const setInertia = (world: PhysicsWorld, label: string, inertia = 0) => {
  const body = findBody(world, label);
  if (isUndefined(body)) {
    return;
  }
  Body.setInertia(body, inertia);
};
