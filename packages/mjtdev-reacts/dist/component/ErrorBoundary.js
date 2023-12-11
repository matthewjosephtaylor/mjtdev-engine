import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Center } from "./Center";
import { Grid } from "./Grid";
// @see https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, message: error.message, stack: error.stack };
    }
    componentDidCatch(error, info) {
        console.log({ error, info });
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        // logErrorToMyService(error, info.componentStack);
    }
    render() {
        // @ts-ignore
        if (this.state["hasError"]) {
            // You can render any custom fallback UI
            console.log({ state: this.state });
            return (_jsx(Center, { style: { width: "100vw", height: "100vh" }, children: _jsxs(Grid, { direction: "row", cellSize: "min-content", children: [_jsx("div", { children: "OOPS! Something unexpected happend" }), _jsx("pre", { children: 
                            //@ts-ignore
                            this.state["message"] }), _jsx("pre", { children: 
                            //@ts-ignore
                            this.state["stack"] })] }) }));
            //@ts-ignore
            return this.props["fallback"];
        }
        //@ts-ignore
        return this.props["children"];
    }
}
//# sourceMappingURL=ErrorBoundary.js.map