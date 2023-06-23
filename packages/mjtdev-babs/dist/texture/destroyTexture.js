import { isUndefined } from "@mjtdev/object";
export const destroyTexture = (scene, name) => {
    const tex = scene.getTextureByName(name);
    if (isUndefined(tex)) {
        return;
    }
    tex.dispose();
    scene.removeTexture(tex);
};
//# sourceMappingURL=destroyTexture.js.map