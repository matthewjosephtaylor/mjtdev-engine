import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { isDefined } from "@mjtdev/object";
export const Center = ({ children, className, style = {}, }) => {
    const classNames = isDefined(className) ? [className] : [];
    return (_jsxs("div", { className: ["center", ...classNames].join(" "), style: {
            display: "grid",
            gridTemplateRows: "repeat(3,auto)",
            ...style,
        }, children: [_jsx("div", {}), _jsx("div", { style: { margin: "auto" }, children: children }), _jsx("div", {})] }));
};
//# sourceMappingURL=Center.js.map