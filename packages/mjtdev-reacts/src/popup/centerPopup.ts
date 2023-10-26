import { isUndefined } from "@mjtdev/object";
import { updatePopup } from "./updatePopup";
import { calcCenterPopup } from "./calcCenterPopup";
import { updatePopupState } from "./usePopupState";

export const centerPopup = (name: string, container: HTMLElement) => {
  if (isUndefined(container)) {
    return;
  }
  const { width, height } = container.parentElement.getBoundingClientRect();
  const pos = calcCenterPopup(width, height);
  updatePopup(name, pos);
};
