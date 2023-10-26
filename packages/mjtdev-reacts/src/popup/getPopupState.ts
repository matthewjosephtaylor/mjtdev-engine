import { usePopupState } from "./usePopupState";


export const getPopupState = (name: string) => {
  const { popups } = usePopupState.getState();
  return popups[name];
};
