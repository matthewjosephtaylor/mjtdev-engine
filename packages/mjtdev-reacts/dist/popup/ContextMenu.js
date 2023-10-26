import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { closePopup } from "./closePopup";
import { Objects } from "@mjtdev/object";
import { Grid } from "../component/Grid";
export const ContextMenu = ({ name, actionMap, }) => {
    const [backgroundColors, setBackgroundColors] = useState({});
    const items = Objects.entries(actionMap)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map((entry, index) => {
        const [name, action] = entry;
        return (_jsx("div", { style: {
                border: "1px solid grey",
                borderRadius: "0.2em",
                width: "min-content",
                whiteSpace: "nowrap",
                backgroundColor: backgroundColors[String(index)] || "black",
            }, onPointerEnter: () => {
                setBackgroundColors({ [index]: "grey" });
            }, onPointerLeave: () => {
                setBackgroundColors({ ...backgroundColors, [index]: "black" });
            }, onClick: () => {
                closePopup(name);
                action();
            }, children: name }, index));
    });
    return (_jsx("div", { onClick: () => {
            closePopup(name);
        }, onPointerLeave: () => {
            closePopup(name);
        }, children: _jsx(Grid, { direction: "row", gap: "0.2em", cellSize: "min-content", style: {
                userSelect: "none",
                backgroundColor: "black",
                border: "1px solid grey",
                borderRadius: "0.2em",
                padding: "0.2em",
            }, children: items }) }));
};
//# sourceMappingURL=ContextMenu.js.map