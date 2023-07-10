import { Objects } from "@mjtdev/object";
import React, { createContext, useContext } from "react";
import { ReactNode, useState } from "react";
import { Frag, Frame, useFragId, useWinCtx } from "..";
import { toRoutes } from "../toRoutes";
import { RouteTable } from "./type/RouteTable";
import { Win } from "./Win";

export type DeskCtx = {
  // nodes: { [k in string]: ReactNode };
  nodes: IdNode[];
};

export type IdNode = [string, ReactNode];

export const useDesk = () => {
  return useContext(DESK_CTX);
};

export const useUpdateDesk = () => {
  return useContext(UPDATE_DESK_CTX);
};

const DESK_CTX = createContext<DeskCtx>(undefined);
const UPDATE_DESK_CTX =
  createContext<React.Dispatch<React.SetStateAction<DeskCtx>>>(undefined);

export const Desk = ({
  children,
  routeTable = [],
  initialPath,
  index,
}: {
  initialPath?: string;
  children?: ReactNode;
  routeTable?: RouteTable;
  index?: ReactNode;
}) => {
  const [deskCtx, setDeskCtx] = useState<DeskCtx>({
    // nodes: { root: <Win key={"root"}>{children}</Win> },
    nodes: [
      [
        "root",
        <Frag id="root" key="root">
          <Win clickBringsToFont={false}>{children}</Win>
        </Frag>,
      ],
    ],
  });

  const routes = toRoutes(routeTable);

  return (
    <DESK_CTX.Provider value={deskCtx}>
      <UPDATE_DESK_CTX.Provider value={setDeskCtx}>
        <Frame routes={routes} initialPath={initialPath} index={index}>
          {deskCtx?.nodes?.map((idNode) => idNode?.[1])}
        </Frame>
      </UPDATE_DESK_CTX.Provider>
    </DESK_CTX.Provider>
  );
};
