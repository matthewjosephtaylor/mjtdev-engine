import { isDefined } from "..";
export function times(count, mapper) {
    const result = [];
    let stopped = false;
    for (let i = 0; i < count; i++) {
        if (stopped) {
            break;
        }
        const r = mapper(i, () => {
            stopped = true;
        });
        if (isDefined(r)) {
            result.push(r);
        }
    }
    return result;
}
//# sourceMappingURL=times.js.map