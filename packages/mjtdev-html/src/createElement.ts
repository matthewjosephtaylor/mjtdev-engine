import { Styles } from "./Styles";
import { CreateElementSpec } from "./type/CreateElementSpec";
import { isValue } from "./isValue";
import { mapValue } from "./mapValue";

export function createElement<K extends keyof HTMLElementTagNameMap>({
  tagName = "div" as K,
  parent,
  attributes,
  datasets,
  clazz,
  id,
  style,
  textContent,
}: CreateElementSpec<K>): HTMLElementTagNameMap[K] {
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
