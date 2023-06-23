import { Color3 } from 'babylonjs';
import { Colors } from "@mjtdev/color";
export const c3 = (color) => {
    const hex = Colors.builder({ color }).hex();
    return Color3.FromHexString(hex);
};
//# sourceMappingURL=c3.js.map