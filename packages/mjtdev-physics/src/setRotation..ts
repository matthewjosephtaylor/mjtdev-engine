import { isUndefined } from "@mjtdev/object";
import { Body, World } from "matter-js";
import { findBody } from "./findBody";

export const setRotation = (world: World, id: string, rotation: number) => {
  const body = findBody(world, id);
  if (isUndefined(body)) {
    return;
  }
  Body.setAngle(body, rotation);
};
