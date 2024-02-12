import { ReactNode } from "react";
import { updatePopupState, usePopupState } from "./usePopupState";

export const openPopup = (
  content: ReactNode,
  options: Partial<{
    name: string;
    x: number;
    y: number;
    right: string;
    visible: boolean;
    showFrame: boolean;
  }> = {}
) => {
  const {
    name = crypto.randomUUID(),
    x,
    y,
    right,
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
        right,
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
