import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { isPoint4 } from "./isPoint4";
import { lerp4 } from "./lerp4";
import { lerp3 } from "./lerp3";
import { lerp2 } from "./lerp2";
import { lerp1 } from "./lerp1";
import { lerp0 } from "./lerp0";
export const lerpPoint = (a, b, alpha) => {
    if (isPoint4(a) && isPoint4(b)) {
        return lerp4(a, b, alpha);
    }
    if (isPoint3(a) && isPoint3(b)) {
        return lerp3(a, b, alpha);
    }
    if (isPoint2(a) && isPoint2(b)) {
        return lerp2(a, b, alpha);
    }
    if (isPoint1(a) && isPoint1(b)) {
        return lerp1(a, b, alpha);
    }
    if (isPoint0(a) && isPoint0(b)) {
        return lerp0(a, b, alpha);
    }
    return undefined;
};
//# sourceMappingURL=lerpPoint.js.map