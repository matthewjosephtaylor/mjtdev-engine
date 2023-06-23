import { isDefined } from "@mjtdev/object";
export const getCamera = (scene, name, producer) => {
    const camera = scene.getCameraByName(name);
    if (isDefined(camera)) {
        return camera;
    }
    return producer();
};
//# sourceMappingURL=getCamera.js.map