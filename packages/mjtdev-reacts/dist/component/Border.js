import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Grid } from "./Grid";
export const Border = ({ title = "", children, style = {}, defaultDisclosed = true, collapsable = false, onDiscloserChange = () => { }, alwaysShowChildren = false, resizable = true, }) => {
    const [disclosed, setDisclosed] = useState(defaultDisclosed);
    const disclosureTriangle = disclosed ? "▼" : "▶";
    const titleDisplay = (_jsx("div", { onClick: () => {
            if (!collapsable) {
                return;
            }
            onDiscloserChange(!disclosed);
            setDisclosed(!disclosed);
        }, children: _jsxs(Grid, { direction: "column", gap: "0.1em", cellSize: "min-content", children: [title, collapsable ? disclosureTriangle : undefined] }) }));
    const resizableStyle = resizable
        ? { resize: "both", overflow: "auto" }
        : {};
    return (_jsxs("fieldset", { style: {
            width: "fit-content",
            height: "fit-content",
            ...style,
        }, children: [_jsx("legend", { style: { userSelect: "none" }, children: titleDisplay }), alwaysShowChildren || disclosed ? (_jsx("div", { style: resizableStyle, children: children })) : undefined] }));
};
//# sourceMappingURL=Border.js.map