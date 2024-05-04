import { GlowLayer, } from "@babylonjs/core/Layers/glowLayer";
import { isDefined } from "@mjtdev/object";
export const getGlowLayer = (scene, name, options) => {
    // workaround Bug in getGlowlayerbyName
    const layerMaybe = scene?.effectLayers?.length
        ? scene.getGlowLayerByName(name)
        : undefined;
    if (isDefined(layerMaybe)) {
        return layerMaybe;
    }
    return new GlowLayer(name, scene, options);
};
//# sourceMappingURL=getGlowLayer.js.map