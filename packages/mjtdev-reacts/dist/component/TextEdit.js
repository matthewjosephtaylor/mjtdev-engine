import { jsx as _jsx } from "react/jsx-runtime";
// import "draft-js/dist/Draft.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/keybinding-vim";
export default function TextEdit({ initialText = "", style = {}, placeHolder, onChange, mode = "markdown", keybinding, }) {
    if (typeof window === "undefined") {
        return undefined;
    }
    return (
    // <div style={{ minHeight: "6em", cursor: "text", ...style }}>
    _jsx(AceEditor, { mode: mode, keyboardHandler: keybinding, theme: "monokai", fontSize: "1rem", focus: true, width: "50rem", defaultValue: initialText, style: style, placeholder: placeHolder, editorProps: {
            $blockScrolling: true,
        }, onChange: onChange })
    // </div>
    );
}
//# sourceMappingURL=TextEdit.js.map