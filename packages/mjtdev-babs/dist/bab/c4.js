import { Color4 } from "babylonjs";
import { Colors } from "@mjtdev/color";
export const c4 = (color) => {
    const c = Colors.builder({ color });
    const result = Color4.FromHexString(c.hex());
    result.a = c.alpha();
    return result;
};
//# sourceMappingURL=c4.js.map