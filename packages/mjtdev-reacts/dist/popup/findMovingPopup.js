import { Objects } from "@mjtdev/object";
import { usePopupState } from "./usePopupState";
export const findMovingPopup = () => {
    const { popups } = usePopupState.getState();
    const movingEntry = Objects.entries(popups).find((entry) => entry[1].moveEnabled);
    return movingEntry;
};
//# sourceMappingURL=findMovingPopup.js.map