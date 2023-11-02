import { isDefined } from "@mjtdev/object";
import { findBody } from "./findBody";
export const getBody = (world, id, producer) => {
    const body = findBody(world, id);
    if (isDefined(body)) {
        return body;
    }
    return producer();
};
//# sourceMappingURL=getBody.js.map