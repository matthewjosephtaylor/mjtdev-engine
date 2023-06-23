import { MouseActionEvent } from "./MouseActionEvent";
import { PointerEventType } from "./PointerEventType";
export type MouseActions = {
    [k in PointerEventType]: (event: MouseActionEvent) => void;
};
//# sourceMappingURL=MouseActions.d.ts.map