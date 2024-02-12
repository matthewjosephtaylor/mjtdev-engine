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
  right: string;
};

export const [usePopupState, updatePopupState, getPopupState] = createState({
  popups: {} as Record<string, Partial<PopupState>>,
  x: 0,
  y: 0,
});
