import { isDefined } from "@mjtdev/object";
import { HighlightLayer } from "babylonjs";
export const getHighlightLayer = (scene, name, options) => {
    const layerMaybe = scene.getHighlightLayerByName(name);
    if (isDefined(layerMaybe)) {
        return layerMaybe;
    }
    return new HighlightLayer(name, scene, options);
};
//# sourceMappingURL=getHighlightLayer.js.map