/// <reference types="ace-builds/ace-modules" />
import React from "react";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/keybinding-vim";
export default function TextEdit({ initialText, style, placeHolder, onChange, mode, keybinding, }: {
    keybinding?: "vim";
    mode?: "markdown";
    placeHolder?: string;
    style?: React.CSSProperties;
    onChange?: (text: string) => void;
    initialText?: string;
}): import("react/jsx-runtime").JSX.Element | undefined;
//# sourceMappingURL=TextEdit.d.ts.map