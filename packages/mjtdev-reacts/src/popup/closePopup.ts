import { updatePopupState } from "./usePopupState";

export const closePopup = (name: string) => {
  updatePopupState((state) => {
    delete state.popups[name];
    return state;
  });
};
