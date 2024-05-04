import type { MouseActionEvent } from "./MouseActionEvent";
import type { PointerEventType } from "./PointerEventType";

export type MouseActions = {
  [k in PointerEventType]: (event: MouseActionEvent) => void;
};
