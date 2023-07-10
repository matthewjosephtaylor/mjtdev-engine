import { jsx as _jsx } from "react/jsx-runtime";
import { isDefined } from "@mjtdev/object";
import { createContext, useContext, useEffect, useState, } from "react";
export const createReactContext = (initial) => {
    const CTX = createContext(initial);
    const useCtx = () => {
        return useContext(CTX);
    };
    const STATE = {
        updateCtx: undefined,
    };
    const ContextProvider = ({ children }) => {
        const [value, setValue] = useState(initial);
        const [uctx, setUctx] = useState();
        useEffect(() => {
            const UPDATE_CTX = createContext(setValue);
            setUctx(UPDATE_CTX);
            STATE.updateCtx = UPDATE_CTX;
        }, []);
        return (isDefined(uctx) && (_jsx(uctx.Provider, { value: setValue, children: _jsx(CTX.Provider, { value: value, children: children }) })));
    };
    const useUpdateCtx = () => {
        // return useContext(UPDATE_CTX);
        return useContext(STATE.updateCtx);
    };
    return {
        ContextProvider,
        useCtx,
        useUpdateCtx,
    };
};
//# sourceMappingURL=createReactContext.js.map