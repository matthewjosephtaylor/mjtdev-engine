import { isDefined } from "@mjtdev/object";
import { TransformNode } from "babylonjs";
export const getTransformNode = (scene, name) => {
    const node = scene.getTransformNodeByName(name);
    if (isDefined(node)) {
        return node;
    }
    return new TransformNode(name, scene);
};
//# sourceMappingURL=getTransformNode.js.map