import React, { createContext, ReactNode, useContext } from "react";
import { Randoms } from "@mjtdev/random";

export const Frag = ({
  children,
  id = Randoms.randomUuid(),
}: {
  id?: string;
  children?: ReactNode;
}) => {
  return (
    <FRAG_ID_CTX.Provider value={id}>
      <React.Fragment>{children}</React.Fragment>
    </FRAG_ID_CTX.Provider>
  );
};

const FRAG_ID_CTX = createContext<string>(undefined);

export const useFragId = () => {
  return useContext(FRAG_ID_CTX);
};
