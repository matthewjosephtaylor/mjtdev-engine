import { createElement } from "./createElement";
import { from } from "./from";
import { readFile } from "./readFile";
import { Styles } from "./Styles";
import { textNodesOfElement } from "./textNodesOfElement";
import { textOfElement } from "./textOfElement";
export * from "./type/CreateElementSpec";
export const Htmls = {
    textNodesOfElement,
    textOfElement,
    createElement,
    readFile,
    from,
    updateStyle: Styles.update,
};
//# sourceMappingURL=index.js.map