import { updatePopupState } from "./usePopupState";
export const updatePopup = (name, updatedState) => {
    updatePopupState((state) => {
        state.popups = {
            ...state.popups,
            [name]: { ...state.popups[name], ...updatedState },
        };
        return state;
    });
};
//# sourceMappingURL=updatePopup.js.map