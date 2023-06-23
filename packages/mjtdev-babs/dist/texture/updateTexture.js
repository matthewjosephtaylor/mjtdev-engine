import { iff } from "@mjtdev/object";
import { DynamicTexture } from "babylonjs";
export const updateTexture = (texture, options) => {
    const { hasAlpha } = options;
    iff(hasAlpha, (value) => {
        texture.hasAlpha = value;
    });
    if (texture instanceof DynamicTexture) {
        texture.update();
    }
};
//# sourceMappingURL=updateTexture.js.map