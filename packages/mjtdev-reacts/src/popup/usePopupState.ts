import { ReactNode } from "react";
import { createState } from "../state/createState";

export type PopupState = {
  content: ReactNode;
  x: number;
  y: number;
  moveEnabled: boolean;
  visible: boolean;
  offsetX: number;
  offsetY: number;
  showFrame: boolean;
};

export const [usePopupState, updatePopupState, getPopupState] = createState({
  popups: {} as Record<string, PopupState>,
  x: 0,
  y: 0,
});
