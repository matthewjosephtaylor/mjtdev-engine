import { isDefined } from "@mjtdev/object";
import { updatePopupState } from "./usePopupState";
export const hidePopup = (name) => {
    updatePopupState((state) => {
        const popup = state.popups[name];
        if (isDefined(popup)) {
            popup.visible = false;
        }
        return state;
    });
};
//# sourceMappingURL=hidePopup.js.map