import { isUndefined } from "@mjtdev/object";
import { Composite, World } from "matter-js";
import { findBody } from "./findBody";

export const removeBody = (world: World, label: string) => {
  const body = findBody(world, label);
  if (isUndefined(body)) {
    return;
  }

  Composite.remove(world, body);
};
