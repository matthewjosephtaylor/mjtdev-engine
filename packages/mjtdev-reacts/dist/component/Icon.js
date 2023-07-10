import { jsx as _jsx } from "react/jsx-runtime";
import { isDefined } from "@mjtdev/object";
/** requires material-icon 'google' font
 *
 *  @import url(https://fonts.googleapis.com/css2?family=Material+Icons);
 */
export const Icon = ({ children, style, onClick, code, }) => {
    const pointerEvents = isDefined(onClick) ? "auto" : "none";
    const cursor = isDefined(onClick) ? "pointer" : "default";
    return (_jsx("span", { onClick: onClick, className: "material-icons", style: {
            // height: "1em",
            // width: "1em",
            // margin: "auto",
            // textAlign: "center",
            // fontSize: "1em",
            // userSelect: "none",
            pointerEvents,
            cursor,
            ...style,
        }, children: code ?? children }));
};
//# sourceMappingURL=Icon.js.map