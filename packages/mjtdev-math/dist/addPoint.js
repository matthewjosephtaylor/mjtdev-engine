import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { isPoint4 } from "./isPoint4";
import { add4 } from "./add4";
import { add3 } from "./add3";
import { add2 } from "./add2";
import { add1 } from "./add1";
import { add0 } from "./add0";
export function addPoint(a, b) {
    if (isPoint4(a) && isPoint4(b)) {
        return add4(a, b);
    }
    if (isPoint3(a) && isPoint3(b)) {
        return add3(a, b);
    }
    if (isPoint2(a) && isPoint2(b)) {
        return add2(a, b);
    }
    if (isPoint1(a) && isPoint1(b)) {
        return add1(a, b);
    }
    if (isPoint0(a) && isPoint0(b)) {
        return add0(a, b);
    }
    return undefined;
}
//# sourceMappingURL=addPoint.js.map