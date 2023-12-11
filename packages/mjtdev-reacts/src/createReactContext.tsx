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
  const CTX = createContext<T | undefined>(initial);
  const useCtx = () => {
    return useContext(CTX);
  };

  const STATE = {
    updateCtx: undefined as
      | React.Context<React.Dispatch<React.SetStateAction<T>>>
      | undefined,
  };

  const ContextProvider = ({ children }: { children?: ReactNode }) => {
    const [value, setValue] = useState(initial);
    const [uctx, setUctx] =
      useState<React.Context<React.Dispatch<React.SetStateAction<T>>>>();

    useEffect(() => {
      const UPDATE_CTX =
        //@ts-ignore TODO bad voodoo in react context
        createContext<React.Dispatch<React.SetStateAction<T>>>(setValue);
      setUctx(UPDATE_CTX);
      STATE.updateCtx = UPDATE_CTX;
    }, []);
    return (
      isDefined(uctx) && (
        //@ts-ignore TODO bad voodoo in react context
        <uctx.Provider value={setValue}>
          <CTX.Provider value={value}>{children}</CTX.Provider>
        </uctx.Provider>
      )
    );
  };
  const useUpdateCtx = () => {
    // return useContext(UPDATE_CTX);
    //@ts-ignore TODO bad voodoo in react context
    return useContext(STATE.updateCtx);
  };
  return {
    //@ts-ignore TODO bad voodoo in react context
    ContextProvider,
    //@ts-ignore TODO bad voodoo in react context
    useCtx,
    useUpdateCtx,
  };
};

export type ReactContextContainer<T> = {
  ContextProvider: ({ children }: { children?: ReactNode }) => JSX.Element;
  useCtx: () => T;
  useUpdateCtx: () => React.Dispatch<React.SetStateAction<T>>;
};
