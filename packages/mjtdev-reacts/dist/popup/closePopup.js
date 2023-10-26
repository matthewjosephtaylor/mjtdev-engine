import { updatePopupState } from "./usePopupState";
export const closePopup = (name) => {
    updatePopupState((state) => {
        delete state.popups[name];
        return state;
    });
};
//# sourceMappingURL=closePopup.js.map