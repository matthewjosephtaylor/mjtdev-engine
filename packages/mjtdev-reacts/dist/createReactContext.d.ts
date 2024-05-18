import React, { ReactNode } from "react";
export declare const createReactContext: <T extends object>(initial?: T) => ReactContextContainer<T>;
export type ReactContextContainer<T> = {
    ContextProvider: ({ children }: {
        children?: ReactNode;
    }) => JSX.Element;
    useCtx: () => T;
    useUpdateCtx: () => React.Dispatch<React.SetStateAction<T>>;
};
//# sourceMappingURL=createReactContext.d.ts.map