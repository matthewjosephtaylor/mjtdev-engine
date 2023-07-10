import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { isUndefined } from "@mjtdev/object";
import { Grid } from "..";
import { useBringToFront } from "../hook/useBringToFront";
import { Icon } from "./Icon";
import { isMouseLayerEvent } from "./type/MouseLayerEvent";
import { useWinCtx } from "./Win";
export const ControlBar = ({ children, controls = [], actions, className = "control-bar", }) => {
    const winCtx = useWinCtx();
    const bringToFront = useBringToFront();
    const icons = controls.map(([name, action], index) => {
        return (_jsx(Icon, { onClick: () => action(winCtx), children: name }, index));
    });
    const mouseDown = (e) => {
        if (isUndefined(actions)) {
            return;
        }
        const { setMoveEnabled, setOffsetX, setOffsetY } = actions;
        const nativeEvent = e.nativeEvent;
        if (isMouseLayerEvent(nativeEvent)) {
            setOffsetX(nativeEvent.layerX);
            setOffsetY(nativeEvent.layerY);
        }
        bringToFront();
        setMoveEnabled(true);
    };
    return (_jsx("div", { onMouseDown: mouseDown, children: _jsxs(Grid, { className: className, direction: "column", gap: "1em", cellSize: ["1fr", "max-content", "1fr"], children: [_jsx("span", {}), _jsx("span", { className: "title", children: children }), _jsx("span", { style: { textAlign: "right" }, children: icons })] }) }));
};
//# sourceMappingURL=ControlBar.js.map