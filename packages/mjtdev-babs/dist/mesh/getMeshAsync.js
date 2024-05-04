import { isDefined } from "@mjtdev/object";
export const getMeshAsync = (scene, name, producer) => {
    const meshMaybe = scene.getMeshByName(name);
    if (isDefined(meshMaybe)) {
        return Promise.resolve(meshMaybe);
    }
    return producer();
};
//# sourceMappingURL=getMeshAsync.js.map