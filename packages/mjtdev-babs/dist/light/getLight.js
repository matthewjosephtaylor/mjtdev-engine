import { isDefined } from "@mjtdev/object";
export const getLight = (scene, name, producer) => {
    const light = scene.getLightByName(name);
    if (isDefined(light)) {
        return light;
    }
    return producer();
};
//# sourceMappingURL=getLight.js.map