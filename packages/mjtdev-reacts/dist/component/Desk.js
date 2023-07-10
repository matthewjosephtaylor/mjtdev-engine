import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { useState } from "react";
import { Frag, Frame } from "..";
import { toRoutes } from "../toRoutes";
import { Win } from "./Win";
export const useDesk = () => {
    return useContext(DESK_CTX);
};
export const useUpdateDesk = () => {
    return useContext(UPDATE_DESK_CTX);
};
const DESK_CTX = createContext(undefined);
const UPDATE_DESK_CTX = createContext(undefined);
export const Desk = ({ children, routeTable = [], initialPath, index, }) => {
    const [deskCtx, setDeskCtx] = useState({
        // nodes: { root: <Win key={"root"}>{children}</Win> },
        nodes: [
            [
                "root",
                _jsx(Frag, { id: "root", children: _jsx(Win, { clickBringsToFont: false, children: children }) }, "root"),
            ],
        ],
    });
    const routes = toRoutes(routeTable);
    return (_jsx(DESK_CTX.Provider, { value: deskCtx, children: _jsx(UPDATE_DESK_CTX.Provider, { value: setDeskCtx, children: _jsx(Frame, { routes: routes, initialPath: initialPath, index: index, children: deskCtx?.nodes?.map((idNode) => idNode?.[1]) }) }) }));
};
//# sourceMappingURL=Desk.js.map