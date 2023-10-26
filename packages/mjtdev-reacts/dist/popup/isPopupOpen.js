import { isDefined } from "@mjtdev/object";
import { usePopupState } from "./usePopupState";
export const isPopupOpen = (name) => {
    const { popups } = usePopupState.getState();
    return isDefined(popups[name]);
};
//# sourceMappingURL=isPopupOpen.js.map