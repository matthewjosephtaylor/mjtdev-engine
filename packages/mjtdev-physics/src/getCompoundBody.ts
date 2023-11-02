import { Body, World } from "matter-js";
import { addBody } from "./addBody";
import { getBody } from "./getBody";
import { BodySpec } from "./type/BodySpec";
import { PhysicsBody } from "./type/PhysicsTypes";
import { updateBody } from "./updateBody";

export const getCompoundBody = (
  world: World,
  id: string,
  parts: PhysicsBody[],
  options: BodySpec = {}
) => {
  return getBody(world, id, () => {
    const body = Body.create({ parts, label: id });
    addBody(world, body);
    updateBody(body, options);
    return body;
  });
};
