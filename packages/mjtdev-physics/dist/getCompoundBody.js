import { Body } from "matter-js";
import { addBody } from "./addBody";
import { getBody } from "./getBody";
import { updateBody } from "./updateBody";
export const getCompoundBody = (world, id, parts, options = {}) => {
    return getBody(world, id, () => {
        const body = Body.create({ parts, label: id });
        addBody(world, body);
        updateBody(body, options);
        return body;
    });
};
//# sourceMappingURL=getCompoundBody.js.map