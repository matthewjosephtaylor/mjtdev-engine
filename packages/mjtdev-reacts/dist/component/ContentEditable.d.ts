import { CSSProperties, KeyboardEventHandler, MouseEventHandler } from "react";
export declare const ContentEditable: ({ id, onChange, onClick, onContextMenu, style, value, autoFocus, onMouseUp, tabIndex, onKeyDown, editable, title, theme, }: {
    theme?: string | undefined;
    id?: string | undefined;
    title?: string | undefined;
    editable?: boolean | undefined;
    tabIndex?: number | undefined;
    autoFocus?: boolean | undefined;
    value?: string | undefined;
    style?: CSSProperties | undefined;
    onChange?: ((value: string | undefined) => void) | undefined;
    onMouseUp?: MouseEventHandler<HTMLElement> | undefined;
    onKeyDown?: KeyboardEventHandler<HTMLElement> | undefined;
    onClick?: MouseEventHandler<HTMLElement> | undefined;
    onContextMenu?: MouseEventHandler<HTMLElement> | undefined;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ContentEditable.d.ts.map