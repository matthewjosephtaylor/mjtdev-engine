"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.times = void 0;
const __1 = require("..");
function times(count, mapper) {
    const result = [];
    let stopped = false;
    for (let i = 0; i < count; i++) {
        if (stopped) {
            break;
        }
        const r = mapper(i, () => {
            stopped = true;
        });
        if ((0, __1.isDefined)(r)) {
            result.push(r);
        }
    }
    return result;
}
exports.times = times;
//# sourceMappingURL=times.js.map