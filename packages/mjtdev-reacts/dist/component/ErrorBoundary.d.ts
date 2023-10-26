import React from "react";
export declare class ErrorBoundary extends React.Component {
    constructor(props: unknown);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
        message: string;
        stack: string;
    };
    componentDidCatch(error: unknown, info: unknown): void;
    render(): any;
}
//# sourceMappingURL=ErrorBoundary.d.ts.map