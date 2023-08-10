import { last } from "@mjtdev/object";
import { pathToParts } from "./pathToParts";
export const pathToFilename = (path) => {
    const parts = pathToParts(path);
    return last(parts);
};
//# sourceMappingURL=pathToFilename.js.map