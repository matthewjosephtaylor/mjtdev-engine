import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import { GuiContextProvider } from "./ctx/GuiContextProvider";
export const render = (node, parent = document.body, container = document.createElement("div")) => {
    parent.appendChild(container);
    const root = ReactDOM.createRoot(container);
    const guiCtx = {
        windows: [],
    };
    root.render(_jsx(GuiContextProvider, { value: guiCtx, children: node }));
    // root.render(node);
    const dispose = () => {
        root.unmount();
        container.remove();
    };
    return { dispose, root, container };
};
//# sourceMappingURL=render.js.map