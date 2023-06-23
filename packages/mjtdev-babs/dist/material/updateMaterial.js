import { StandardMaterial } from "babylonjs";
import { updateStandardMaterial } from "./updateStandardMaterial";
export const updateMaterial = (scene, material, options) => {
    if (material instanceof StandardMaterial) {
        updateStandardMaterial(scene, material, options);
    }
};
//# sourceMappingURL=updateMaterial.js.map