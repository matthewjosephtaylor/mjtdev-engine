import { jsx as _jsx } from "react/jsx-runtime";
import { useRemoveFromDesk } from "../hook/useRemoveFromDesk";
import { Win } from "./Win";
export const BasicWindow = ({ title, children, left = "10vw", top = "30vh", resizeable, style, }) => {
    const removeFromDesk = useRemoveFromDesk();
    return (_jsx(Win, { title: title, controls: [["close", removeFromDesk]], style: { ...style, left, top }, resizeable: resizeable, children: children }));
};
//# sourceMappingURL=BasicWindow.js.map