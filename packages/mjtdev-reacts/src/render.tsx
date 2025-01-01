import type { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import type { RenderControl } from "./type/RenderControl";

import type { GuiCtx } from "./ctx/GuiContextProvider";
import { GuiContextProvider } from "./ctx/GuiContextProvider";

export const render = (
  node: ReactNode | ReactNode[],
  parent = document.body,
  container = document.createElement("div")
): RenderControl => {
  parent.appendChild(container);
  const root = ReactDOM.createRoot(container);
  const guiCtx: GuiCtx = {
    windows: [],
  };
  root.render(<GuiContextProvider value={guiCtx}>{node}</GuiContextProvider>);
  // root.render(node);
  const dispose = () => {
    root.unmount();
    container.remove();
  };
  return { dispose, root, container };
};
