import { fix } from "./fix";
export const extend = (arr, value) => {
    const unfixed = [...arr, value];
    return fix(unfixed);
};
//# sourceMappingURL=extend.js.map