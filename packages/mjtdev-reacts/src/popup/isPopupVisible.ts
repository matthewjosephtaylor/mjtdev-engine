import { isDefined } from "@mjtdev/object";
import { usePopupState } from "./usePopupState";


export const isPopupVisible = (name: string) => {
  const { popups } = usePopupState.getState();
  const popup = popups[name];
  return isDefined(popup) && popup.visible;
};
