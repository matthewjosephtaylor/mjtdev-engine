import React from "react";
import { Center } from "./Center";
import { Grid } from "./Grid";

// @see https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary

export class ErrorBoundary extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.message, stack: error.stack };
  }

  componentDidCatch(error: unknown, info: unknown) {
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
      return (
        <Center style={{ width: "100vw", height: "100vh" }}>
          <Grid direction="row" cellSize={"min-content"}>
            <div>OOPS! Something unexpected happend</div>
            <pre>
              {
                //@ts-ignore
                this.state["message"]
              }
            </pre>
            <pre>
              {
                //@ts-ignore
                this.state["stack"]
              }
            </pre>
          </Grid>
        </Center>
      );
      //@ts-ignore
      return this.props["fallback"];
    }

    //@ts-ignore
    return this.props["children"];
  }
}
