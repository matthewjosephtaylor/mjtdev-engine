import { Htmls } from "@mjtdev/html";
import { Maths } from "@mjtdev/math";
import { isUndefined } from "@mjtdev/object";
import type { CSSProperties } from "react";

export const resizeElementToContent = (
  element: HTMLElement,
  content: string,
  style: CSSProperties = {}
) => {
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
  //@ts-ignore
  fake.style.minWidth = toString(maxWidth);
  //@ts-ignore
  fake.style.minHeight = toString(maxHeight);
  const { width: maxWidthPx, height: maxHeightPx } =
    fake.getBoundingClientRect();
  //@ts-ignore
  fake.style.minWidth = toString(minWidth);
  //@ts-ignore
  fake.style.minHeight = toString(minHeight);
  const { width: minWidthPx, height: minHeightPx } =
    fake.getBoundingClientRect();
  //@ts-ignore
  fake.style.minWidth = null;
  fake.remove();
  const widthPx = Maths.clamp(width, minWidthPx, maxWidthPx);
  const heightPx = Maths.clamp(height, minHeightPx, maxHeightPx);

  //@ts-ignore
  element.style.width = toString(widthPx);
  //@ts-ignore
  element.style.height = toString(heightPx);
  return [widthPx, heightPx] as const;
};

export const toString = (value: unknown) => {
  if (isUndefined(value)) {
    return undefined;
  }
  return String(value);
};
