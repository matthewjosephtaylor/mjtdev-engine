import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { isPoint4 } from "./isPoint4";
import { subtract4 } from "./subtract4";
import { subtract3 } from "./subtract3";
import { subtract2 } from "./subtract2";
import { subtract1 } from "./subtract1";
import { subtract0 } from "./subtract0";
export function subtractPoint(a, b) {
    if (isPoint4(a) && isPoint4(b)) {
        return subtract4(a, b);
    }
    if (isPoint3(a) && isPoint3(b)) {
        return subtract3(a, b);
    }
    if (isPoint2(a) && isPoint2(b)) {
        return subtract2(a, b);
    }
    if (isPoint1(a) && isPoint1(b)) {
        return subtract1(a, b);
    }
    if (isPoint0(a) && isPoint0(b)) {
        return subtract0(a, b);
    }
    return undefined;
}
//# sourceMappingURL=subtractPoint.js.map