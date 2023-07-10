import { isUndefined } from "@mjtdev/object";


export const bestVisiblePosition = (rect: DOMRect, parentRect: DOMRect) => {
  if (isUndefined(rect) || isUndefined(parentRect)) {
    return undefined;
  }
  const { left, top, bottom, right, width, height } = rect;
  const {
    left: pLeft, right: pRight, top: pTop, bottom: pBottom, width: pWidth, height: pHeight,
  } = parentRect;

  const northTop = pTop - height;
  const southTop = pTop + pHeight;
  const goodTop = northTop < 0 ? southTop : northTop;

  const westLeft = pLeft - width;
  const eastLeft = pLeft + pWidth;

  const goodLeft = westLeft < 0 ? eastLeft : westLeft;

  return {
    x: goodLeft,
    y: goodTop,
  };
};
