import { jsx as _jsx } from "react/jsx-runtime";
import { ContextMenu } from "./ContextMenu";
import { openPopup } from "./openPopup";
export const openContextMenu = (event, actionMap, options = {}) => {
    event.preventDefault();
    const name = "context-menu";
    const { offsetX = -3, offsetY = -3, style, itemStyle } = options;
    openPopup(_jsx(ContextMenu, { style: style, itemStyle: itemStyle, actionMap: actionMap, name: name }), {
        name,
        showFrame: false,
        x: event.clientX + offsetX,
        y: event.clientY + offsetY,
    });
};
//# sourceMappingURL=openContextMenu.js.map