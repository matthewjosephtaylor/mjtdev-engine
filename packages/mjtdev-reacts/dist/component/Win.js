import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { first, iffBrowser, isDefined } from "@mjtdev/object";
import { createContext, useContext, useEffect, useRef, useState, } from "react";
import { useBringToFront } from "../hook/useBringToFront";
import { useEventListener } from "../hook/useEventListener";
import { useZOrder } from "../hook/useZOrder";
import { Anchor } from "./Anchor";
import { ControlBar } from "./ControlBar";
import { unPx } from "../util/unPx";
import { px } from "../util/px";
import { useIsFocused } from "../hook/useIsFocused";
export const WIN_CTX = createContext(undefined);
export const UPDATE_WIN_CTX = createContext(undefined);
export const useWinCtx = () => {
    return useContext(WIN_CTX);
};
export const useUpdateWinCtx = () => {
    return useContext(UPDATE_WIN_CTX);
};
export const Win = ({ children, style = {}, title, controls = [], className, clickBringsToFont = true, resizeable = false, }) => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const shouldShowControlBar = isDefined(title) || controls.length > 0;
    const zOrder = useZOrder();
    const focused = useIsFocused();
    useEffect(() => {
        move();
    });
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    //@ts-ignore
    const [left, setLeft] = useState(style?.left);
    //@ts-ignore
    const [top, setTop] = useState(style?.top);
    const [moveEnabled, setMoveEnabled] = useState(false);
    const [pointer, setPointer] = useState("auto");
    const actions = {
        setMoveEnabled,
        setOffsetX,
        setOffsetY,
        setPointer,
    };
    const move = () => {
        const l = Math.max(mouseX - offsetX);
        const t = Math.max(mouseY - offsetY);
        if (moveEnabled) {
            setLeft(`${l}px`);
            setTop(`${t}px`);
        }
    };
    useEventListener("mousemove", (e) => {
        setMouseX(e.clientX);
        setMouseY(e.clientY);
    }, iffBrowser(() => document.body));
    useEventListener("mouseup", (e) => {
        setPointer("auto");
        setMoveEnabled(false);
    }, iffBrowser(() => document.body));
    const bringToFront = useBringToFront();
    const mouseDown = (e) => {
        if (clickBringsToFont) {
            bringToFront();
        }
    };
    const [winCtx, setWinCtx] = useState({
        actions,
    });
    const [classNames, setClassNames] = useState();
    useEffect(() => {
        setClassNames([
            "window",
            className,
            focused ? "focused" : "unfocused",
            resizeable ? "resizeable" : undefined,
        ]
            .filter(isDefined)
            .join(" "));
    }, [focused]);
    const ref = useRef(null);
    const [currentWidth, setCurrentWidth] = useState();
    const [currentHeight, setCurrentHeight] = useState();
    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            const parent = first(entries);
            if (!parent) {
                return;
            }
            const { width, height } = parent.contentRect;
            setCurrentWidth(px(width));
            setCurrentHeight(px(height));
        });
        if (!ref.current) {
            return;
        }
        observer.observe(ref.current);
    }, [ref]);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    return (_jsx(WIN_CTX.Provider, { value: winCtx, children: _jsx(UPDATE_WIN_CTX.Provider, { value: setWinCtx, children: _jsxs("div", { ref: ref, onMouseDown: mouseDown, className: classNames, style: {
                    ...style,
                    position: "fixed",
                    left,
                    top,
                    width,
                    height,
                    zIndex: zOrder,
                    pointerEvents: pointer,
                }, children: [shouldShowControlBar && (_jsx(ControlBar, { actions: actions, controls: controls, children: title })), children, resizeable ? (_jsx(Anchor
                    // parentWidth={width}
                    // parentHeight={height}
                    , { 
                        // parentWidth={width}
                        // parentHeight={height}
                        parentContent: children, onDiff: (x, y) => {
                            const updatedWidth = unPx(currentWidth) ?? 0 + x;
                            const updatedHeight = unPx(currentHeight) ?? 0 + y;
                            setWidth(px(updatedWidth));
                            setHeight(px(updatedHeight));
                            setCurrentWidth(px(updatedWidth));
                            setCurrentHeight(px(updatedHeight));
                        } })) : (_jsx(_Fragment, {}))] }) }) }));
};
//# sourceMappingURL=Win.js.map