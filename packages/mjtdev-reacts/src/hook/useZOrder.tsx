import { isUndefined } from "@mjtdev/object";
import { useDesk } from "./../component/Desk";
import { useFragId } from "./../component/Frag";

export const useZOrder = () => {
  const desk = useDesk();
  const id = useFragId();
  if (isUndefined(id)) {
    return undefined;
  }
  if (isUndefined(desk?.nodes)) {
    return undefined;
  }

  const idNode = desk.nodes.find(([key, value]) => {
    return key === id;
  });
  return desk.nodes.indexOf(idNode);
};


