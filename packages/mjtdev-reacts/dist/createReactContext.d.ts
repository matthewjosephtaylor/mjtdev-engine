import type { ReactNode } from "react";
import type React from "react";
import { type JSX } from "react";
export declare const createReactContext: <T extends object>(initial?: T | undefined) => ReactContextContainer<T>;
export type ReactContextContainer<T> = {
    ContextProvider: ({ children }: {
        children?: ReactNode;
    }) => JSX.Element;
    useCtx: () => T;
    useUpdateCtx: () => React.Dispatch<React.SetStateAction<T>>;
};
//# sourceMappingURL=createReactContext.d.ts.map