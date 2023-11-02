import { World } from "matter-js";
import { BODY_PRODUCERS } from "./BODY_PRODUCERS";
import { addBody } from "./addBody";
import { getBody } from "./getBody";
import { BodySpec } from "./type/BodySpec";
import { BodyType } from "./type/BodyType";
import { PhysicsBody } from "./type/PhysicsTypes";
import { updateBody } from "./updateBody";

export const getBodyType = (
  world: World,
  type: BodyType,
  id: string,
  options: BodySpec & Partial<{ addToWorld: boolean }> = {}
): PhysicsBody => {
  return getBody(world, id, () => {
    const body = BODY_PRODUCERS[type](options);
    body.label = id;
    const { addToWorld = true } = options;
    if (addToWorld) {
      addBody(world, body);
    }
    updateBody(body, options);
    return body;
  });
};
