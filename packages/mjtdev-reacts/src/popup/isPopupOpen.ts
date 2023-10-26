import { isDefined } from "@mjtdev/object";
import { usePopupState } from "./usePopupState";

export const isPopupOpen = (name: string) => {
  const { popups } = usePopupState.getState();
  return isDefined(popups[name]);
};
