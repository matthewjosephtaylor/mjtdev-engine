import { isPoint0 } from "./isPoint0";
import { isPoint1 } from "./isPoint1";
import { isPoint2 } from "./isPoint2";
import { isPoint3 } from "./isPoint3";
import { isPoint4 } from "./isPoint4";
import { normalize4 } from "./normalize4";
import { normalize3 } from "./normalize3";
import { normalize2 } from "./normalize2";
import { normalize1 } from "./normalize1";
import { normalize0 } from "./normalize0";
export const normalizePoint = (point) => {
    if (isPoint4(point)) {
        return normalize4(point);
    }
    if (isPoint3(point)) {
        return normalize3(point);
    }
    if (isPoint2(point)) {
        return normalize2(point);
    }
    if (isPoint1(point)) {
        return normalize1(point);
    }
    if (isPoint0(point)) {
        return normalize0(point);
    }
    return undefined;
};
//# sourceMappingURL=normalizePoint.js.map