/**
 * NOTE: The setter on style may silently change/ignore the value
 * @returns the _actual_ style values that were set
 */
const update = ({ style, element, }) => {
    if (!style) {
        return;
    }
    const setProperties = {};
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
//# sourceMappingURL=Styles.js.map