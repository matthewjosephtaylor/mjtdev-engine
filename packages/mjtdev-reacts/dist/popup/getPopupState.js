import { usePopupState } from "./usePopupState";
export const getPopupState = (name) => {
    const { popups } = usePopupState.getState();
    return popups[name];
};
//# sourceMappingURL=getPopupState.js.map