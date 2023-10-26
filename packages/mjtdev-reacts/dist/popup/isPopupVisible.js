import { isDefined } from "@mjtdev/object";
import { usePopupState } from "./usePopupState";
export const isPopupVisible = (name) => {
    const { popups } = usePopupState.getState();
    const popup = popups[name];
    return isDefined(popup) && popup.visible;
};
//# sourceMappingURL=isPopupVisible.js.map