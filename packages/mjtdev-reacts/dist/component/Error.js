import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import useRenderCount from "../hook/useRenderCount";
export const Error = ({ children }) => {
    const location = useLocation();
    const renderCount = useRenderCount();
    if (renderCount === 0) {
        console.log(location);
        console.error(children);
    }
    return (_jsxs("div", { className: "error", style: {
            backgroundColor: "white",
            color: "black",
            fontFamily: "monospace",
            fontSize: "1em",
            width: "fit-content",
            border: "0.5em solid red",
            margin: "0.5em",
            padding: "0.5em",
        }, children: [_jsx("span", { children: children }), _jsx("hr", {}), _jsxs("span", { children: ["location: ", location.pathname] })] }));
};
//# sourceMappingURL=Error.js.map