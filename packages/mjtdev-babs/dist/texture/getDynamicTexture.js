import { DynamicTexture } from "babylonjs";
import { getTexture } from "./getTexture";
import { TEXTURE_SAMPLING_MODES } from "./TEXTURE_SAMPLING_MODES";
import { updateTexture } from "./updateTexture";
export const getDynamicTexture = (scene, name, options = {}) => {
    const texture = getTexture(scene, name, () => {
        const { generateMipMaps = true, samplingMode = "linearNearest", width = 1024, height = 1024, init, } = options;
        const result = new DynamicTexture(name, {
            width,
            height,
        }, scene, generateMipMaps, TEXTURE_SAMPLING_MODES[samplingMode]);
        if (init) {
            init(result.getContext());
            result.update();
        }
        return result;
    });
    updateTexture(texture, options);
    return texture;
};
//# sourceMappingURL=getDynamicTexture.js.map