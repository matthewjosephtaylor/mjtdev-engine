import React from "react";
export declare class ErrorBoundary extends React.Component {
    constructor(props: {} | Readonly<{}>);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
        message: string;
        stack: string | undefined;
    };
    componentDidCatch(error: unknown, info: unknown): void;
    render(): any;
}
//# sourceMappingURL=ErrorBoundary.d.ts.map