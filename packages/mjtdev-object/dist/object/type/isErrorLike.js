import { isDefined } from "../isDefined";
export const isErrorLike = (maybe) => {
    const straw = maybe;
    return (typeof straw === "object" &&
        (typeof straw.message === "string" ||
            typeof straw.stack === "string" ||
            isDefined(straw.cause)));
};
//# sourceMappingURL=isErrorLike.js.map