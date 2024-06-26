import { Point2 } from "@mjtdev/math";
import { isDefined, isUndefined } from "@mjtdev/object";
import { Body, World } from "matter-js";
import { findBody } from "./findBody";
import { toMatterVector } from "./toMatterVector";

export const applyForce = (
  world: World,
  id: string,
  force: Point2,
  position?: Point2
) => {
  const body = findBody(world, id);
  if (isUndefined(body)) {
    return;
  }
  const worldSpacePosition = isDefined(position) ? position : body.position;
  // console.log({ worldSpacePosition, force, body });
  Body.applyForce(
    body,
    toMatterVector(worldSpacePosition),
    toMatterVector(force)
  );
};
