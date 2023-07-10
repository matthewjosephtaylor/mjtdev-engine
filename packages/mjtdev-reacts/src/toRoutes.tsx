import { RouteTable } from "./component/type/RouteTable";
import { toRouteNode } from "./toRouteNode";

export const toRoutes = (routes: RouteTable) => {
  return routes.map((route, index) => toRouteNode(route[0], route[1], index));
};
