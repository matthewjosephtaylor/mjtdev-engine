import React, { ReactNode } from "react";
import {
  HashRouter,
  MemoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Error } from "./Error";

export const Frame = ({
  children,
  routes,
  type = "memory",
  initialPath = "",
  index = <Error>No route defined for navigation</Error>,
}: {
  index?: ReactNode;
  initialPath?: string;
  children: ReactNode;
  routes?: ReactNode;
  type?: "hash" | "memory";
}) => {
  const node = type === "memory" ? MemoryRouter : HashRouter;
  const defaultRoute = <Route path="*" element={index} />;
  const routesNode = (
    <Routes key="">
      <Route path="" element={children}>
        {routes}
        {defaultRoute}
      </Route>
    </Routes>
  );
  return node({ children: [routesNode], initialEntries: [initialPath] });
};


