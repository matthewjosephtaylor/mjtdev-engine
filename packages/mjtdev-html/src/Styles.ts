import * as CSS from "csstype";

/**
 * NOTE: The setter on style may silently change/ignore the value
 * @returns the _actual_ style values that were set
 */
const update = ({
  style,
  element,
}: {
  style?: CSS.Properties;
  element: HTMLElement | SVGElement;
}): CSS.Properties => {
  if (!style) {
    return;
  }
  const setProperties: CSS.Properties = {};
  Object.entries(style).forEach((entry) => {
    const [k, v] = entry;
    const stringValue = String(v);
    element.style[k] = stringValue;
    setProperties[k] = element[k];
  });
  return setProperties;
};

export const Styles = {
  update,
};
