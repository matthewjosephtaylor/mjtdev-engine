import { BODY_PRODUCERS } from "./BODY_PRODUCERS";
import { addBody } from "./addBody";
import { getBody } from "./getBody";
import { updateBody } from "./updateBody";
export const getBodyType = (world, type, id, options = {}) => {
    return getBody(world, id, () => {
        const body = BODY_PRODUCERS[type](options);
        body.label = id;
        const { addToWorld = true } = options;
        if (addToWorld) {
            addBody(world, body);
        }
        updateBody(body, options);
        return body;
    });
};
//# sourceMappingURL=getBodyType.js.map