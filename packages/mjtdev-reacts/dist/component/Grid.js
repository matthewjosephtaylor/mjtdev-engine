import { jsx as _jsx } from "react/jsx-runtime";
import { isDefined } from "@mjtdev/object";
import { Children } from "react";
export const Grid = ({ children, direction = "column", count = Children.count(children), style, className, cellSize = "1fr", gap, }) => {
    const templateParams = typeof cellSize === "string"
        ? `repeat(${count},${cellSize})`
        : cellSize.join(" ");
    const classNames = [
        "grid-layout",
        ...(isDefined(className) ? [className] : []),
    ].join(" ");
    return (_jsx("div", { className: classNames, 
        // className={"grid-layout"}
        style: {
            ...style,
            display: "grid",
            gap,
            gridTemplateColumns: direction === "column" ? templateParams : undefined,
            gridTemplateRows: direction === "row" ? templateParams : undefined,
        }, children: children }));
};
//# sourceMappingURL=Grid.js.map