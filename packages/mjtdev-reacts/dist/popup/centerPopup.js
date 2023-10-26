import { isUndefined } from "@mjtdev/object";
import { updatePopup } from "./updatePopup";
import { calcCenterPopup } from "./calcCenterPopup";
export const centerPopup = (name, container) => {
    if (isUndefined(container)) {
        return;
    }
    const { width, height } = container.parentElement.getBoundingClientRect();
    const pos = calcCenterPopup(width, height);
    updatePopup(name, pos);
};
//# sourceMappingURL=centerPopup.js.map