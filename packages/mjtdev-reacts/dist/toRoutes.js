import { toRouteNode } from "./toRouteNode";
export const toRoutes = (routes) => {
    return routes.map((route, index) => toRouteNode(route[0], route[1], index));
};
//# sourceMappingURL=toRoutes.js.map