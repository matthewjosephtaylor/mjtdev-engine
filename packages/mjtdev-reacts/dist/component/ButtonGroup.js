import { jsx as _jsx } from "react/jsx-runtime";
import { Grid } from "./Grid";
export const ButtonGroup = ({ actions, count = 5, style = {}, }) => {
    const contents = Object.entries(actions).map((entry) => {
        const [key, value] = entry;
        return (_jsx("input", { style: { width: "min-content", textTransform: "capitalize" }, onClick: value, type: "button", value: key }, key));
    });
    return (_jsx(Grid, { direction: "column", gap: "0.3em", cellSize: "min-content", style: { whiteSpace: "nowrap", ...style }, count: count, children: contents }));
};
//# sourceMappingURL=ButtonGroup.js.map