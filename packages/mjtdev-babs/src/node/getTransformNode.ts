import { isDefined } from "@mjtdev/object";
import { Scene, TransformNode } from "babylonjs";

export const getTransformNode = (scene: Scene, name: string): TransformNode => {
  const node = scene.getTransformNodeByName(name);
  if (isDefined(node)) {
    return node;
  }
  return new TransformNode(name, scene);
};
