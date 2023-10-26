import { Htmls } from "@mjtdev/html";
import { Maths } from "@mjtdev/math";
import { isUndefined } from "@mjtdev/object";
export const resizeElementToContent = (element, content, style = {}) => {
    if (isUndefined(element)) {
        return;
    }
    const { minWidth, maxWidth, minHeight, maxHeight } = style;
    // super dodgy but works
    const fake = Htmls.from("pre", {
        style: {
            fontSize: "1em",
            border: "ridge 2px",
            padding: "0.5em",
            margin: "0.1em",
            lineHeight: "1.5em",
            boxSizing: "border-box",
        },
    });
    fake.style.visibility = "none";
    fake.style.width = "min-content";
    document.body.appendChild(fake);
    fake.innerText = content;
    const { width, height } = fake.getBoundingClientRect();
    fake.innerText = "";
    fake.style.minWidth = toString(maxWidth);
    fake.style.minHeight = toString(maxHeight);
    const { width: maxWidthPx, height: maxHeightPx } = fake.getBoundingClientRect();
    fake.style.minWidth = toString(minWidth);
    fake.style.minHeight = toString(minHeight);
    const { width: minWidthPx, height: minHeightPx } = fake.getBoundingClientRect();
    fake.style.minWidth = null;
    fake.remove();
    const widthPx = Maths.clamp(width, minWidthPx, maxWidthPx);
    const heightPx = Maths.clamp(height, minHeightPx, maxHeightPx);
    element.style.width = toString(widthPx);
    element.style.height = toString(heightPx);
    return [widthPx, heightPx];
};
export const toString = (value) => {
    if (isUndefined(value)) {
        return undefined;
    }
    return String(value);
};
//# sourceMappingURL=resizeElementToContent.js.map