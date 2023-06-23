import { toVec3 } from "./toVec3";
export function point3ToJson(point3) {
    if (point3 === undefined) {
        return undefined;
    }
    const [x, y, z] = toVec3(point3);
    // @ts-ignore
    const f = Intl.NumberFormat({ notation: "compact" });
    return `[${f.format(x)},${f.format(y)},${f.format(z)}]`;
}
//# sourceMappingURL=point3ToJson.js.map