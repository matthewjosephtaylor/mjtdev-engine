import { CSSProperties, KeyboardEventHandler, MouseEventHandler } from "react";
export declare const ContentEditable: ({ id, onChange, onClick, onContextMenu, style, value, autoFocus, onMouseUp, tabIndex, onKeyDown, editable, title, theme, }: {
    theme?: string;
    id?: string;
    title?: string;
    editable?: boolean;
    tabIndex?: number;
    autoFocus?: boolean;
    value?: string;
    style?: React.CSSProperties;
    onChange?: (value: string | undefined) => void;
    onMouseUp?: MouseEventHandler<HTMLElement>;
    onKeyDown?: KeyboardEventHandler<HTMLElement>;
    onClick?: MouseEventHandler<HTMLElement>;
    onContextMenu?: MouseEventHandler<HTMLElement>;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ContentEditable.d.ts.map