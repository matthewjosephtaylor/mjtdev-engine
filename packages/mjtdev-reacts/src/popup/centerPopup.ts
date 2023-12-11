import { calcCenterPopup } from "./calcCenterPopup";
import { updatePopup } from "./updatePopup";

export const centerPopup = (name: string, container: HTMLElement) => {
  if (!container || !container.parentElement) {
    return;
  }
  const { width, height } = container.parentElement.getBoundingClientRect();
  const pos = calcCenterPopup(width, height);
  updatePopup(name, pos);
};
