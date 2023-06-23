import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { isPoint4 } from "./isPoint4";
import { distance0 } from "./distance0";
import { distance1 } from "./distance1";
import { distance2 } from "./distance2";
import { distance3 } from "./distance3";
import { distance4 } from "./distance4";
export function distancePoint(a, b) {
    if (isPoint4(a) && isPoint4(b)) {
        return distance4(a, b);
    }
    if (isPoint3(a) && isPoint3(b)) {
        return distance3(a, b);
    }
    if (isPoint2(a) && isPoint2(b)) {
        return distance2(a, b);
    }
    if (isPoint1(a) && isPoint1(b)) {
        return distance1(a, b);
    }
    if (isPoint0(a) && isPoint0(b)) {
        return distance0(a, b);
    }
    return undefined;
}
//# sourceMappingURL=distancePoint.js.map