import { iff } from "@mjtdev/object";
import { HemisphericLight, PointLight } from "babylonjs";
import { v3 } from "../bab/v3";
export const updateLight = (light, options) => {
    const { intensity, direction, position } = options;
    iff(intensity, () => {
        light.intensity = intensity;
    });
    if (light instanceof HemisphericLight) {
        iff(direction, () => {
            light.direction = v3(direction);
        });
    }
    if (light instanceof PointLight) {
        iff(position, () => {
            light.position = v3(position);
        });
    }
};
//# sourceMappingURL=updateLight.js.map