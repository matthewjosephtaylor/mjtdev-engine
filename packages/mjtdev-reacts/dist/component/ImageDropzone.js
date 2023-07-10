import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { HighlightableIcon } from "./HighlightableIcon";
export function ImageDropzone({ action, activeText = "Drop Here...", text = "Drag or Click", }) {
    const onDrop = useCallback((acceptedFiles) => {
        action(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (_jsxs("div", { ...getRootProps(), children: [_jsx("input", { ...getInputProps() }), isDragActive ? (_jsx(HighlightableIcon, { text: activeText, highlighted: true })) : (_jsx(HighlightableIcon, { text: text }))] }));
}
//# sourceMappingURL=ImageDropzone.js.map