import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState, } from "react";
import { Grid } from "./Grid";
import { isDefined, isUndefined } from "@mjtdev/object";
export const Border = ({ title, children, style = {}, defaultDisclosed = true, collapsable = false, onDiscloserChange = () => { }, alwaysShowChildren = false, resizable = true, onResize = () => { }, }) => {
    const [disclosed, setDisclosed] = useState(defaultDisclosed);
    const disclosureTriangle = disclosed ? "▼" : "▶";
    const contentRef = useRef();
    useEffect(() => {
        if (isUndefined(contentRef.current)) {
            return;
        }
        const observer = new ResizeObserver(() => {
            if (isUndefined(contentRef.current)) {
                return;
            }
            const bbox = contentRef.current.getBoundingClientRect();
            onResize(bbox);
        });
        observer.observe(contentRef.current);
        return () => {
            observer.disconnect();
        };
    }, [contentRef]);
    const titleDisplay = (_jsx("div", { onClick: () => {
            if (!collapsable) {
                return;
            }
            onDiscloserChange(!disclosed);
            setDisclosed(!disclosed);
        }, children: _jsxs(Grid, { direction: "column", gap: "0.1em", cellSize: "min-content", children: [title, _jsx("span", { style: { marginLeft: "0.5em" }, children: collapsable ? disclosureTriangle : undefined })] }) }));
    const resizableStyle = resizable
        ? { resize: "both", overflow: "auto" }
        : {};
    const legendDisplay = isDefined(title) ? (_jsx("legend", { style: { userSelect: "none" }, children: titleDisplay })) : undefined;
    return (_jsxs("fieldset", { style: {
            width: "fit-content",
            height: "fit-content",
            ...style,
        }, children: [legendDisplay, alwaysShowChildren || disclosed ? (_jsx("div", { ref: contentRef, style: resizableStyle, children: children })) : undefined] }));
};
//# sourceMappingURL=Border.js.map