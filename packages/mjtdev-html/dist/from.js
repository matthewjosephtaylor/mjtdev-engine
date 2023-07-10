import { createElement } from "./createElement";
export const from = (tagName = "div", options = {}) => {
    return createElement({ tagName, ...options });
};
//# sourceMappingURL=from.js.map