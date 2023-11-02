import { Composite } from "matter-js";
import { PhysicsBody, PhysicsWorld } from "./type/PhysicsTypes";

export const findBodies = (
  world: PhysicsWorld,
  labelOrPredicate: string | ((body: PhysicsBody) => boolean)
): PhysicsBody[] => {
  const predicate =
    typeof labelOrPredicate === "string"
      ? (b: PhysicsBody) => b.label === labelOrPredicate
      : labelOrPredicate;
  const bodies = Composite.allBodies(world);
  return bodies.filter(predicate);
};
