import { Styles } from "./Styles";
import { isValue } from "./isValue";
import { mapValue } from "./mapValue";
export function createElement({ tagName = "div", parent, attributes, datasets, clazz, id, style, textContent, }) {
    const element = document.createElement(tagName);
    mapValue(style, (style) => {
        Styles.update({ element, style });
    });
    mapValue(datasets, (datasets) => {
        Object.entries(datasets).forEach((entry) => {
            const [k, v] = entry;
            element.dataset[k] = v;
        });
    });
    mapValue(id, (id) => {
        element.id = id;
    });
    mapValue(attributes, (attributes) => {
        Object.entries(attributes).forEach((attr) => {
            const [name, value] = attr;
            if (isValue(value)) {
                element.setAttribute(name, value);
            }
        });
    });
    mapValue(clazz, (clazz) => {
        const clazzes = clazz.split(" ");
        element.classList.add(...clazzes);
    });
    mapValue(textContent, (textContent) => {
        element.textContent = textContent;
    });
    mapValue(parent, (parent) => {
        parent.appendChild(element);
    });
    return element;
}
//# sourceMappingURL=createElement.js.map