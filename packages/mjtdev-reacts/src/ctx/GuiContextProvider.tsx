import React, { createContext, ReactNode, useContext, useState } from "react";
import { WinCtx } from "./WinCtx";

export type GuiCtx = {
  windows: WinCtx[];
};

export type UpdateGuiCtx = React.Dispatch<React.SetStateAction<GuiCtx>>;
export const GUI_CTX = createContext<GuiCtx | undefined>(undefined);
export const UPDATE_GUI_CTX = createContext<UpdateGuiCtx | undefined>(
  undefined
);

export const useGuiCtx = () => {
  return useContext(GUI_CTX);
};
export const useUpdateGuiCtx = () => {
  return useContext(UPDATE_GUI_CTX);
};

export const GuiContextProvider = ({
  children,
  value,
}: {
  value: GuiCtx;
  children?: ReactNode;
}) => {
  const [ctx, setCtx] = useState<GuiCtx>(value);

  return (
    <GUI_CTX.Provider value={ctx}>
      <UPDATE_GUI_CTX.Provider value={setCtx}>
        {children}
      </UPDATE_GUI_CTX.Provider>
    </GUI_CTX.Provider>
  );
};
