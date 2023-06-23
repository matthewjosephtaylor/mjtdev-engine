import { isDefined } from "@mjtdev/object";
export const getMesh = (scene, name, producer = () => undefined, updatable = false) => {
    const meshMaybe = scene.getMeshByName(name);
    if (isDefined(meshMaybe) && !updatable) {
        return meshMaybe;
    }
    if (isDefined(meshMaybe) && updatable) {
        return producer(meshMaybe);
    }
    return producer();
};
//# sourceMappingURL=getMesh.js.map