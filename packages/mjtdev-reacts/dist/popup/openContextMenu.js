import { jsx as _jsx } from "react/jsx-runtime";
import { ContextMenu } from "./ContextMenu";
import { openPopup } from "./openPopup";
export const openContextMenu = (event, actionMap) => {
    event.preventDefault();
    const name = "context-menu";
    openPopup(_jsx(ContextMenu, { actionMap: actionMap, name: name }), {
        name,
        showFrame: false,
        x: event.clientX - 3,
        y: event.clientY - 3,
    });
};
//# sourceMappingURL=openContextMenu.js.map