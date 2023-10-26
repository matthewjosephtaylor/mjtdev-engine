import { ReactNode } from "react";
import { usePopupState } from "./usePopupState";

export const openPopup = (
  content: ReactNode,
  options: Partial<{
    name: string;
    x: number;
    y: number;
    visible: boolean;
    showFrame: boolean;
  }> = {}
) => {
  const {
    name = crypto.randomUUID(),
    x,
    y,
    showFrame = true,
    visible = true,
  } = options;
  usePopupState.setState((state) => ({
    ...state,
    popups: {
      ...state.popups,
      [name]: {
        content,
        x,
        y,
        visible,
        moveEnabled: false,
        offsetX: 0,
        offsetY: 0,
        showFrame,
      },
    },
  }));
  return name;
};
