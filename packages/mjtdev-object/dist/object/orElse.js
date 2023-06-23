import { isDefined } from "./isDefined";
export const orElse = (o, e) => {
    if (isDefined(o)) {
        return o;
    }
    return e;
};
//# sourceMappingURL=orElse.js.map