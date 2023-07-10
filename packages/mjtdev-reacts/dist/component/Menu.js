import { jsx as _jsx } from "react/jsx-runtime";
import { Click } from "./Click";
import { Grid } from "./Grid";
export const Menu = ({ items, direction = "row", className = "menu", }) => {
    const cells = items.map((item, index) => {
        const [content, action, tooltip] = item;
        return (_jsx(Click, { action: (e) => {
                e.preventDefault();
                action();
            }, tooltip: tooltip, children: content }, index));
    });
    return (_jsx(Grid, { className: className, style: { width: "max-content", height: "max-content" }, direction: direction, cellSize: "max-content", children: cells }));
};
//# sourceMappingURL=Menu.js.map