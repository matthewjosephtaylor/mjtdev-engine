import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext } from "react";
import { Randoms } from "@mjtdev/random";
export const Frag = ({ children, id = Randoms.randomUuid(), }) => {
    return (_jsx(FRAG_ID_CTX.Provider, { value: id, children: _jsx(React.Fragment, { children: children }) }));
};
const FRAG_ID_CTX = createContext(undefined);
export const useFragId = () => {
    return useContext(FRAG_ID_CTX);
};
//# sourceMappingURL=Frag.js.map