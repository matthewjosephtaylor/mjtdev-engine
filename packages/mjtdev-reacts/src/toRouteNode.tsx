import React, { ReactNode } from "react";
import { Route } from "react-router-dom";

export const toRouteNode = (
  path: string,
  element: ReactNode,
  key: string | number
): ReactNode => {
  return <Route path={path} key={key} element={element} />;
};
