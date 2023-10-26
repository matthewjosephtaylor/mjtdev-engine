import { PopupState, updatePopupState } from "./usePopupState";

export const updatePopup = (
  name: string,
  updatedState: Partial<PopupState>
) => {
  updatePopupState((state) => {
    state.popups = {
      ...state.popups,
      [name]: { ...state.popups[name], ...updatedState },
    };
    return state;
  });
};
