import { textNodesOfElement } from "./textNodesOfElement";
export function textOfElement(element) {
    return textNodesOfElement(element)
        .map((cn) => cn.textContent)
        .join();
}
//# sourceMappingURL=textOfElement.js.map