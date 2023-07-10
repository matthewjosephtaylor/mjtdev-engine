import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HashRouter, MemoryRouter, Route, Routes, } from "react-router-dom";
import { Error } from "./Error";
export const Frame = ({ children, routes, type = "memory", initialPath = "", index = _jsx(Error, { children: "No route defined for navigation" }), }) => {
    const node = type === "memory" ? MemoryRouter : HashRouter;
    const defaultRoute = _jsx(Route, { path: "*", element: index });
    const routesNode = (_jsx(Routes, { children: _jsxs(Route, { path: "", element: children, children: [routes, defaultRoute] }) }, ""));
    return node({ children: [routesNode], initialEntries: [initialPath] });
};
//# sourceMappingURL=Frame.js.map