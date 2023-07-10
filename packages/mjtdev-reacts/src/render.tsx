import { ReactChild, ReactNode } from "react";
import ReactDOM from "react-dom/client";
import { RenderControl } from "./type/RenderControl";

import { GuiContextProvider, GuiCtx } from "./ctx/GuiContextProvider";
import React from "react";

export const render = (
  node: ReactChild | ReactNode[],
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
