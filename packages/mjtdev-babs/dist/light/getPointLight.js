import { PointLight } from "babylonjs";
import { v3 } from "../bab/v3";
import { getLight } from "./getLight";
import { updateLight } from "./updateLight";
export const getPointLight = (scene, name, options = {}) => {
    const light = getLight(scene, name, () => {
        const { position } = options;
        return new PointLight(name, v3(position), scene);
    });
    updateLight(light, options);
};
//# sourceMappingURL=getPointLight.js.map