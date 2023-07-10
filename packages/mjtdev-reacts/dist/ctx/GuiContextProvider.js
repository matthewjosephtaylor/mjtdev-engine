import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
export const GUI_CTX = createContext(undefined);
export const UPDATE_GUI_CTX = createContext(undefined);
export const useGuiCtx = () => {
    return useContext(GUI_CTX);
};
export const useUpdateGuiCtx = () => {
    return useContext(UPDATE_GUI_CTX);
};
export const GuiContextProvider = ({ children, value, }) => {
    const [ctx, setCtx] = useState(value);
    return (_jsx(GUI_CTX.Provider, { value: ctx, children: _jsx(UPDATE_GUI_CTX.Provider, { value: setCtx, children: children }) }));
};
//# sourceMappingURL=GuiContextProvider.js.map