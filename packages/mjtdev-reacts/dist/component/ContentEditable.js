import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { isUndefined } from "@mjtdev/object";
import { useEffect, useRef, useState, } from "react";
import { Editor } from "@monaco-editor/react";
export const ContentEditable = ({ id, onChange = () => undefined, onClick = () => undefined, onContextMenu = () => undefined, style = {}, 
// value = "",
value, autoFocus, onMouseUp, 
// onRef = () => undefined,
tabIndex, onKeyDown, editable = true, title, theme = "vs-dark", }) => {
    const defaultedStyle = {
        // maxWidth: "80em",
        // minWidth: "20em",
        // minHeight: "3em",
        // maxHeight: "10em",
        // resize: "none",
        ...style,
        overflow: "visible",
    };
    const ref = useRef();
    const statusBarRef = useRef();
    const [editor, setEditor] = useState();
    const [monaco, setMonaco] = useState();
    useEffect(() => {
        if (isUndefined(editor)) {
            return;
        }
        const parent = ref.current.parentElement;
        const resize = () => {
            const { width, height } = parent.getBoundingClientRect();
            editor.layout({
                width,
                height,
            });
        };
        resize();
        const observer = new ResizeObserver(resize);
        observer.observe(ref.current.parentElement);
        return () => {
            observer.disconnect();
        };
    }, [ref, editor, monaco]);
    return (_jsxs("div", { className: "content-editable", ref: ref, title: title, onKeyDown: onKeyDown, onMouseUp: onMouseUp, onClick: onClick, autoFocus: autoFocus, tabIndex: tabIndex, onContextMenu: onContextMenu, style: defaultedStyle, children: [_jsx(Editor, { theme: theme, 
                // language=""
                language: "Markdown", onMount: (editor, monaco) => {
                    if (autoFocus) {
                        editor.focus();
                    }
                    setEditor(editor);
                    setMonaco(monaco);
                }, options: {
                    contextmenu: false,
                    lineNumbers: "off",
                    wordWrap: "on",
                    lineDecorationsWidth: 0,
                    // automaticLayout: true,
                    scrollBeyondLastLine: false,
                    // selectionHighlight: false,
                    selectionHighlight: false,
                    minimap: {
                        enabled: false,
                    },
                    // pasteAs: {}
                }, 
                // defaultValue={value}
                value: value, onChange: (value) => {
                    onChange(value);
                } }), _jsx("div", { ref: statusBarRef })] }));
};
//# sourceMappingURL=ContentEditable.js.map