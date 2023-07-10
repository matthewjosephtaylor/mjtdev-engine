import React from "react";
import { useLocation } from "react-router-dom";
import useRenderCount from "../hook/useRenderCount";

export const Error = ({ children }: { children: string }) => {
  const location = useLocation();
  const renderCount = useRenderCount();
  if (renderCount === 0) {
    console.log(location);
    console.error(children);
  }
  return (
    <div
      className="error"
      style={{
        backgroundColor: "white",
        color: "black",
        fontFamily: "monospace",
        fontSize: "1em",
        width: "fit-content",
        border: "0.5em solid red",
        margin: "0.5em",
        padding: "0.5em",
      }}
    >
      <span>{children}</span>
      <hr />
      <span>location: {location.pathname}</span>
    </div>
  );
};
