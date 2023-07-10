import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { HighlightableIcon } from "./HighlightableIcon";
export function Dropzone({ action, iconCode, iconSize, highlightedIconCode, activeText = "Drop Here...", inactiveText = "Drag or Click", }) {
    const onDrop = useCallback((acceptedFiles) => {
        action(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (_jsxs("div", { ...getRootProps(), children: [_jsx("input", { ...getInputProps() }), isDragActive ? (_jsx(HighlightableIcon, { iconSize: iconSize, iconCode: iconCode, highlightedIconCode: highlightedIconCode, text: activeText, highlighted: true })) : (_jsx(HighlightableIcon, { iconSize: iconSize, iconCode: iconCode, highlightedIconCode: highlightedIconCode, text: inactiveText }))] }));
}
//# sourceMappingURL=Dropzone.js.map