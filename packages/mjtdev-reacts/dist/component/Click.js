import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { isDefined, isUndefined } from "@mjtdev/object";
import { useState } from "react";
import { useAddToDesk } from "../hook/useAddToDesk";
import { useNav } from "../hook/useNav";
import { Hover } from "./Hover";
export const Click = ({ children, to, open, openId, tooltip, tooltipDelayMills = 200, action, contextMenu, }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [shouldHideTooltip, setShouldHideTooltip] = useState(true);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [showTimeHandle, setShowTimeHandle] = useState();
    const [hideTimeHandle, setHideTimeHandle] = useState();
    const navigate = useNav();
    const addToDesk = useAddToDesk();
    const click = (e) => {
        setShowTooltip(false);
        if (isDefined(to)) {
            navigate(to);
        }
        if (isDefined(open)) {
            addToDesk(open, openId);
        }
        if (isDefined(action)) {
            action(e);
        }
    };
    const contextClick = (e) => {
        setShowContextMenu(false);
    };
    const auxClick = (e) => {
        if (e.button === 1) {
            setShowTooltip(true);
            setShouldHideTooltip(false);
        }
    };
    const contextMenuClick = (e) => {
        if (isDefined(contextMenu)) {
            e.preventDefault();
            setShowTooltip(false);
            setShouldHideTooltip(true);
            setShowContextMenu(true);
        }
    };
    const mouseEnter = (e) => {
        if (isUndefined(tooltip)) {
            return;
        }
        clearTimeout(hideTimeHandle);
        setShouldHideTooltip(true);
        const handle = setTimeout(() => {
            setShowTooltip(true);
        }, tooltipDelayMills);
        setShowTimeHandle(handle);
    };
    const mouseLeave = (e) => {
        if (shouldHideTooltip) {
            clearTimeout(showTimeHandle);
            const handle = setTimeout(() => {
                setShowTooltip(false);
            }, tooltipDelayMills);
            setHideTimeHandle(handle);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "click-item", onClick: click, onContextMenu: contextMenuClick, onAuxClick: auxClick, onMouseEnter: mouseEnter, onMouseLeave: mouseLeave, children: children }), showTooltip && (_jsx(Hover, { className: "tooltip", setShow: setShowTooltip, children: tooltip })), showContextMenu && (_jsx(Hover, { setShow: setShowContextMenu, children: _jsx("div", { onClick: contextClick, children: contextMenu }) }))] }));
};
//# sourceMappingURL=Click.js.map