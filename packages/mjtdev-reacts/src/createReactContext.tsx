import { isDefined } from "@mjtdev/object";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const createReactContext = <T extends object>(
  initial?: T
): ReactContextContainer<T> => {
  const CTX = createContext<T>(initial);
  const useCtx = () => {
    return useContext(CTX);
  };

  const STATE = {
    updateCtx: undefined as React.Context<
      React.Dispatch<React.SetStateAction<T>>
    >,
  };

  const ContextProvider = ({ children }: { children?: ReactNode }) => {
    const [value, setValue] = useState(initial);
    const [uctx, setUctx] =
      useState<React.Context<React.Dispatch<React.SetStateAction<T>>>>();

    useEffect(() => {
      const UPDATE_CTX =
        createContext<React.Dispatch<React.SetStateAction<T>>>(setValue);
      setUctx(UPDATE_CTX);
      STATE.updateCtx = UPDATE_CTX;
    }, []);
    return (
      isDefined(uctx) && (
        <uctx.Provider value={setValue}>
          <CTX.Provider value={value}>{children}</CTX.Provider>
        </uctx.Provider>
      )
    );
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

export type ReactContextContainer<T> = {
  ContextProvider: ({ children }: { children?: ReactNode }) => JSX.Element;
  useCtx: () => T;
  useUpdateCtx: () => React.Dispatch<React.SetStateAction<T>>;
};
