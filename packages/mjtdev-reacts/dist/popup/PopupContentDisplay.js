import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Grid } from "../component/Grid";
import { closePopup } from "./closePopup";
import { updatePopup } from "./updatePopup";
export const PopupContentDisplay = ({ name, moveEnabled, x, y, content, showFrame, }) => {
    const topFrame = showFrame ? (_jsxs(Grid, { cellSize: ["min-content", "1fr", "min-content"], style: { userSelect: "none", border: "1px solid white" }, children: [_jsx("span", { style: { fontSize: "16px" }, children: "\u2261" }), _jsx("div", { children: " " }), _jsx("input", { type: "button", onClick: () => closePopup(name), value: "X" })] })) : (_jsx(_Fragment, {}));
    return (_jsx("div", { onPointerDown: (evt) => {
            if (!showFrame) {
                updatePopup(name, {
                    moveEnabled: true,
                    offsetX: evt.clientX - x,
                    offsetY: evt.clientY - y,
                });
            }
        }, children: _jsxs(Grid, { direction: "row", cellSize: "min-content", children: [_jsx("div", { style: {
                        textAlign: "center",
                        userSelect: "none",
                        backgroundColor: moveEnabled ? "grey" : "black",
                        // border: "1px solid white",
                    }, onPointerDown: (evt) => {
                        updatePopup(name, {
                            moveEnabled: true,
                            offsetX: evt.clientX - x,
                            offsetY: evt.clientY - y,
                        });
                    }, children: topFrame }), content] }) }));
};
//# sourceMappingURL=PopupContentDisplay.js.map