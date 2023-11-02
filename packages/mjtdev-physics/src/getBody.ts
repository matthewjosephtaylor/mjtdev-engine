import { isDefined } from "@mjtdev/object";
import { World } from "matter-js";
import { findBody } from "./findBody";
import { PhysicsBody } from "./type/PhysicsTypes";

export const getBody = (
  world: World,
  id: string,
  producer: () => PhysicsBody
): PhysicsBody => {
  const body = findBody(world, id);
  if (isDefined(body)) {
    return body;
  }
  return producer();
};
