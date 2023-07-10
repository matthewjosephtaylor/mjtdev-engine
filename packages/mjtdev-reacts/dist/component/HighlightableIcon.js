import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid } from "./Grid";
import { Icon } from "./Icon";
export const HighlightableIcon = ({ text, highlighted = false, iconCode = "add_a_photo", highlightedIconCode = "file_upload", iconSize = "10em", }) => {
    const code = highlighted ? highlightedIconCode : iconCode;
    return (_jsxs(Grid, { direction: "row", cellSize: "fit-content", children: [_jsx(Icon, { code: code, style: {
                    margin: "auto",
                    fontSize: iconSize,
                    height: "auto",
                } }), _jsx("p", { style: { margin: "auto" }, children: text })] }));
};
//# sourceMappingURL=HighlightableIcon.js.map